import { $Enums } from '@prisma/client';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType({ description: "Create student with single object DTO" })
export class CreateStudentInput {

  @Field(() => String)
  fullname: string;

  @Field(() => Int)
  phone: number;

  @Field()
  grade: $Enums.Grader;

}
