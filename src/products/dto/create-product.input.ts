import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  category: string;

  @Field(() => String)
  unitOfMeasure: string;

  @Field(() => Number)
  unitsAvailable: number;
} // CreateProductInput
