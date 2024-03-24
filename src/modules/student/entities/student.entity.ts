import { $Enums } from '@prisma/client';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Timestamp } from 'src/entities/timestamp.entity';
import { CourseObject } from 'src/modules/course/entities/course.entity';
import { UserObject } from 'src/modules/user/entities/user.entity';

@ObjectType({ description: "Student object type" })
export class StudentObject extends Timestamp {

  @Field(() => Int)
  id: number;

  @Field(() => String)
  fullname: string;

  @Field(() => Int)
  phone: number;

  @Field()
  grade: $Enums.Grader;

  @Field(() => String, { defaultValue: "my_pict.jpg" })
  profile_pict?: string;

  @Field(() => Boolean, { defaultValue: false })
  is_graduate?: boolean;

  @Field(() => [CourseObject], { nullable: true })
  courses: CourseObject[];

  @Field(() => UserObject)
  user: UserObject;
}
