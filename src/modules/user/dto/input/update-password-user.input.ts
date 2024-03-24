import { InputType, PickType } from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";

@InputType({ description: "Update password user DTO" })
export class UpdatePasswordUser extends PickType(CreateUserInput, ['password'] as const) { }