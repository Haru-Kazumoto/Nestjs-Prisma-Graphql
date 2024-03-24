import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, Max } from 'class-validator';
import { CreateStudentInput } from 'src/modules/student/dto/create-student.input';

@InputType({ description: "DTO For User Create" })
export class CreateUserInput {

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;

  @IsNotEmpty()
  @Field(() => CreateStudentInput)
  student: CreateStudentInput;

}
