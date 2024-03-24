import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CourseObject} from './entities/course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';

@Resolver(() => CourseObject)
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => [CourseObject])
  async findAllCourse(
    @Args('skip', {nullable: false, type: () => Int}) skip: number,
    @Args('take', {nullable: false, type: () => Int}) take: number
  ) {
    return await this.courseService.findAllCourse({skip,take});
  }

  @Mutation(() => CourseObject)
  async createOneCourse(@Args('bodyToCreate') body: CreateCourseInput) {
    return await this.courseService.createOneCourse(body);
  }

  @Query(() => CourseObject)
  async findCourseByName(@Args('course_name') course_name: string) {
    return await this.courseService.findCourseByName(course_name);
  }

  @Mutation(() => CourseObject)
  async updateCourse(
    @Args('courseId', {nullable: false, type: () => Int}) courseId: number,
    @Args('bodyToUpdate', {nullable: false}) body: UpdateCourseInput
  ) {
    return await this.courseService.updateCourse(courseId, body);
  }


}
