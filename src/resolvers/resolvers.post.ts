import 'reflect-metadata';
import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Post } from '../models/post';
import { PrismaService } from '../prisma.service';


@Resolver(Post)
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Post])
  posts() {
    return this.prismaService.post.findMany({});
  }
}
