import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  // Exclude keys from user
  exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[],
  ): Omit<User, Key> {
    for (let key of keys) {
      delete user[key];
    }
    return user;
  }

  async create(createUserInput: CreateUserInput) {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) {
      createUserInput = {
        ...createUserInput,
        role: 'admin',
      };
    }

    const user = await this.prisma.user.create({
      data: createUserInput,
    });
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    const mUsers = users.map((user) => this.exclude(user, ['password']));
    return mUsers;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return this.exclude(user, ['password']);
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...updateUserInput,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
} // UsersService
