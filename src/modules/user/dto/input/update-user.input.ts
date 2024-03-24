import { CreateUserInput } from './create-user.input';
import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends OmitType(CreateUserInput, ['student'] as const) { }
