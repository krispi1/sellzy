import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  role: string;

  @Field(() => String, { nullable: true })
  status: string;
} // CreateUserInput
