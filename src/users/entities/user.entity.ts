import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String, {
    description: `User's role: 'admin' | 'seller'`,
    defaultValue: 'seller',
  })
  role: string;

  @Field(() => String, {
    description: `User's status: 'active' | 'suspended'`,
    defaultValue: 'active',
  })
  status: string;
}
