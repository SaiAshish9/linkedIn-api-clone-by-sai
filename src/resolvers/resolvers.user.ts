import { CreateUserInput } from './createUserInput';
import 'reflect-metadata';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from '../models/user';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [User])
  users() {
    return this.prismaService.user.findMany({});
  }

  @Mutation((returns) => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: data.name,
        image: data.image,
        headline: data.headline,
      },
    });
  }

  @Mutation((returns) => User, { nullable: true })
  async deleteAllUsers(): Promise<Prisma.BatchPayload> {
    return this.prismaService.user.deleteMany({});
  }
}
