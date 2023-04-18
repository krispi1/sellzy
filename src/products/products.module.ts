import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [PrismaClient, ProductsResolver, ProductsService],
})
export class ProductsModule {}
