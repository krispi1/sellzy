import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Number, { nullable: true })
  price: number;

  @Field(() => String, { nullable: true })
  category: string;

  @Field(() => String, { nullable: true })
  unitOfMeasure: string;

  @Field(() => Int, { nullable: true })
  unitsAvailable: number;
} // UpdateProductInput
