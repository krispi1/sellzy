import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [PrismaClient, UsersResolver, UsersService],
})
export class UsersModule {}
