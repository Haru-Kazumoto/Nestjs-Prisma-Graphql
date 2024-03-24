import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({isAbstract: true})
export abstract class Timestamp {

    @Field(() => Date, {
        name: "created_at",
        description: "when the object was created",
        defaultValue: new Date()
    })
    created_at: Date;

    @Field(() => Date, {
        name: "updated_at",
        description: "when the object was updated",
        defaultValue: new Date()
    })
    updated_at: Date;

    @Field(() => Date, {
        name: "deleted_at",
        description: "when the object was deleted",
        defaultValue: null,
        nullable: true
    })
    deleted_at?: Date;

}