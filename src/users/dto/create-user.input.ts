// import { InputType, Int, Field } from '@nestjs/graphql';

// @InputType()
// export class CreateUserInput {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }

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
  phone: string;
}
