import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaClient) {}

  async create(createProductInput: CreateProductInput) {
    return await this.prisma.product.create({
      data: createProductInput,
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({ where: { id: id } });
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    return await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...updateProductInput,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
} // ProductsService
