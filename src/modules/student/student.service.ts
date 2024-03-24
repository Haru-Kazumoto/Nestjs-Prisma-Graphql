import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { IStudentService } from './interfaces/student.service.interface';
import { PrismaService } from 'prisma/services/prisma.service';
import { $Enums, Student } from '@prisma/client';

@Injectable()
export class StudentService implements IStudentService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async createOneStudent(body: CreateStudentInput): Promise<Student> {
    return null;
  }

  async findManyStudents(params: { skip?: number; take?: number; }): Promise<Student[]> {
    const {skip,take} = params;
    return await this.prisma.student.findMany({
      skip,
      take
    });
  }

}
