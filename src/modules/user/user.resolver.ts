import { ResponseMessage } from './dto/response/update.response';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/input/create-user.input';
import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UserObject } from './entities/user.entity';
import { UpdatePasswordUser } from './dto/input/update-password-user.input';
import { Prisma } from '@prisma/client';
import { UpdateUserInput } from './dto/input/update-user.input';

@Resolver(() => UserObject)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => UserObject, { description: "Create user with single request" })
  public async createOneUserAndStudent(@Args('bodyCreate') bodyCreate: CreateUserInput) {
    return await this.userService.createOneUserAndStudent(bodyCreate);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Query(() => [UserObject], { description: "Find all user with pagination" })
  async findManyUser(
    @Args('skip', { nullable: false }) skip: number,
    @Args('take', { nullable: false }) take: number,
  ) {
    return await this.userService.findAllUser({ skip, take });
  }

  @Mutation(() => ResponseMessage)
  async updatePassword(
    @Args('userId', { nullable: false, type: () => Int }) userId: number,
    @Args('data', { nullable: false }) data: UpdatePasswordUser
  ): Promise<ResponseMessage> {
    await this.userService.updatePassword(userId, data);

    return {
      statusCode: 200,
      message: "Your password has successfully changed!"
    };
  }

  @Mutation(() => ResponseMessage)
  async updateAccount(
    @Args('userId', { nullable: false, type: () => Int }) userId: number,
    @Args('data', { nullable: false }) data: UpdateUserInput
  ): Promise<ResponseMessage> {
    await this.userService.updateAccount(userId, data);

    return {
      statusCode: 200,
      message: "Your account has updated!"
    };
  }

  @Mutation(() => UserObject)
  async activateUserAccount(@Args('userId', {nullable: false, type: () => Int}) userId: number) {
    return await this.userService.activateUserAccount(userId);
  }

  @Mutation(() => ResponseMessage)
  async deleteOneUser(@Args("userId") userId: number): Promise<ResponseMessage> {
    await this.userService.deleteOneUser(userId);

    return {
      statusCode: 200,
      message: "User has successfully deleted!"
    };
  }

  @Query(() => String)
  hello(): string {
    return 'Hello nestjs + prisma + graphql!';
  }

}
