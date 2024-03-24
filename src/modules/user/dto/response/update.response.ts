import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseMessage {
      @Field(() => Int) 
      statusCode: number | any;

      @Field(() => String)
      message: string;
}