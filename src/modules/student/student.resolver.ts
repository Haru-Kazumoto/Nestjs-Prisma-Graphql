import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentObject } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => StudentObject)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => [StudentObject])
  async findAllStudents(
    @Args('skip', {nullable: false, type: () => Int}) skip: number,
    @Args('take', {nullable: false, type: () => Int}) take: number
  ) {
    return await this.studentService.findManyStudents({skip,take});
  }
}
