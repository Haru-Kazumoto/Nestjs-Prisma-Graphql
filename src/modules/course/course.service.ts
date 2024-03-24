import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { ICourseService } from './interfaces/course.service.interface';
import { PrismaService } from 'prisma/services/prisma.service';
import { Course } from '@prisma/client';
import { GraphqlException } from 'src/exceptions/graphql.exception';
import { ErrorCode } from 'src/utils/error-codes';

@Injectable()
export class CourseService implements ICourseService {
  constructor(private readonly prisma: PrismaService) { }

  async findAllCourse(params: { skip?: number; take?: number; }): Promise<Course[]> {
    const {skip, take} = params;
    return await this.prisma.course.findMany({skip,take});
  }

  async createOneCourse(body: CreateCourseInput): Promise<Course> {
    return this.prisma.$transaction(async (tx) => {
      const courseToCreate: Course = await tx.course.create({
        data: {...body}
      });

      return courseToCreate;
    })
  }

  async findCourseByName(course_name: string): Promise<Course> {
    return await this.prisma.course.findFirstOrThrow({where: {course_name: course_name}});
  }

  async updateCourse(courseId: number, bodyToUpdate: UpdateCourseInput): Promise<Course> {
    const findId: Course = await this.prisma.course.findFirst({where: {id: courseId}});
    if(!findId) throw new GraphqlException("Id course not found", ErrorCode.ID_NOT_FOUND);

    return this.prisma.$transaction(async (tx) => {  
        return await tx.course.update({
          where: {id: courseId},
          data: {...bodyToUpdate}
        });
    });
  }

  async deleteCourse(courseId: number): Promise<void> {
    await this.prisma.course.delete({
      where: {id: courseId}
    });
  }
}
