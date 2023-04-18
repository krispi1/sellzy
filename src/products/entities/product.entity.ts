import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  category: string;

  @Field(() => String)
  unitOfMeasure: string;

  @Field(() => Int)
  unitsAvailable: number;
} // Product
