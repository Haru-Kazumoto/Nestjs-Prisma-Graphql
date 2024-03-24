import { InputType, Int, Field } from '@nestjs/graphql';

@InputType({description: "Course create input"})
export class CreateCourseInput {
      @Field(() => String)
      course_name: string;
}
