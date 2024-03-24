import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { IUserService } from './interfaces/user.service.interface';
import { PrismaService } from 'prisma/services/prisma.service';
import { User } from '@prisma/client';

import * as bcrypt from "bcrypt";
import { UpdatePasswordUser } from './dto/input/update-password-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GraphqlException } from 'src/exceptions/graphql.exception';
import { ErrorCode } from 'src/utils/error-codes';

@Injectable()
export class UserService implements IUserService {

  constructor(
    private prisma: PrismaService
  ) { }

  async createOneUserAndStudent(body: CreateUserInput): Promise<User> {
    return this.prisma.$transaction(async (tx) => {
      const userData = await tx.user.create({
        data: {
          ...body,
          password: bcrypt.hashSync(body.password, 15),
          student: {
            create: {
              ...body.student
            }
          },
        },
        include: {
          student: true
        }
      });

      return userData;
    });
  }

  async findAllUser(params: { skip: number, take: number }): Promise<User[]> {
    const { skip, take } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      include: {
        student: {
          include: {
            courses: true
          }
        }
      },
      orderBy: {
        created_at: "asc"
      }
    });
  }

  async findUserById(userId: number): Promise<User> {
    return await this.prisma.user.findFirstOrThrow({where: {id: userId}});
  }

  async activateUserAccount(userId: number): Promise<User> {
    const findId: User = await this.prisma.user.findFirst({ where: { id: userId } });
    if (!findId) throw new GraphqlException("Id user is not found", ErrorCode.BAD_REQUEST);

    return this.prisma.$transaction(async (tx) => {
      return await tx.user.update({
        where: {
          id: userId
        }, 
        data: {
          is_active: true
        }
      })
    });
  }

  async updateAccount(userId: number, data: UpdateUserInput): Promise<void> {
    const findId: User = await this.prisma.user.findFirst({ where: { id: userId } });
    if (!findId) throw new GraphqlException("Id user is not found", ErrorCode.BAD_REQUEST);

    await this.prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data: { 
          ...data,
          password: bcrypt.hashSync(data.password, 15)
        },
      });
    });
  }

  async updatePassword(userId: number, data: UpdatePasswordUser): Promise<void> {
    const findId: User = await this.prisma.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!findId) throw new GraphqlException("Id user is not found", ErrorCode.BAD_REQUEST);

    this.prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data: { password: bcrypt.hashSync(data.password, 15) }
      })
    });
  }

  async deleteOneUser(userId: number): Promise<void> {
    this.prisma.user.delete({where: {id: userId}});
  }
}
