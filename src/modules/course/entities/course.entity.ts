import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Timestamp } from 'src/entities/timestamp.entity';
import { StudentObject } from 'src/modules/student/entities/student.entity';

@ObjectType({ description: "Course Object return type" })
export class CourseObject extends Timestamp {

  @Field(() => Int)
  id: number;

  @Field(() => String)
  course_name: string;

  @Field(() => Date, {defaultValue: new Date()})
  added_at: Date;

  @Field(() => StudentObject, {nullable: true})
  student: StudentObject;
}
