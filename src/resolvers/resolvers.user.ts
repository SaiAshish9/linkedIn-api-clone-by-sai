import 'reflect-metadata';
import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from '../models/user';
import { PrismaService } from '../prisma.service';

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [User])
  users() {
    return this.prismaService.user.findMany({});
  }
}
