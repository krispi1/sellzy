import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

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
} // User
