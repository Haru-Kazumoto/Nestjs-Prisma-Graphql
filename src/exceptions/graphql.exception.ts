import { GraphQLError } from "graphql";

export class GraphqlException extends GraphQLError {
    constructor(message?: string, code?: string){
        super(message, undefined, undefined, undefined, undefined, undefined, {
            code: code,
        });
    }
}