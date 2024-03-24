import { ObjectType, Field, ID, Int, } from '@nestjs/graphql';
import { Exclude, instanceToPlain } from 'class-transformer';
import { Timestamp } from 'src/entities/timestamp.entity';
import { StudentObject } from 'src/modules/student/entities/student.entity';

@ObjectType({ description: "Return object of user" })
export class UserObject extends Timestamp {

    @Field(() => Int)
    public id: number;

    @Field()
    public username: string;

    @Field()
    public email: string;

    @Field()
    @Exclude({ toPlainOnly: true })
    public password: string;

    @Field({ defaultValue: false })
    public is_active: boolean;

    @Field(() => StudentObject, { nullable: true })
    public student?: StudentObject;

    toJSON() {
        return instanceToPlain(this);
    }
}
