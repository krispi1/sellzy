import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async create(createUserInput: CreateUserInput) {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) {
      createUserInput = {
        ...createUserInput,
        role: 'admin',
      };
    }
    return await this.prisma.user.create({ data: createUserInput });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...updateUserInput,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
} // UsersService
