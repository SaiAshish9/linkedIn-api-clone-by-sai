import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Context,
  Args,

} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Post } from '../models/post';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { CreatePostInput } from './createPostInput';

@Resolver(Post)
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Post])
  posts() {
    return this.prismaService.post.findMany({});
  }

  @Mutation((returns) => Post)
  async createPost(
    @Args('data') data: CreatePostInput,
    @Context() ctx,
  ): Promise<Post> {
    var {
      content,
      image,
      userReaction,
      published,
      videoUrl,
      commentCount,
      reactions,
      variableReactionsCount,
      liked,
      clapped,
      loved,
      bright,
      support,
      curious,
      authorId,
    } = data;

    return this.prismaService.post.create({
      data: {
        content,
        image,
        userReaction,
        published,
        videoUrl,
        commentCount,
        reactions,
        variableReactionsCount,
        liked,
        clapped,
        loved,
        bright,
        support,
        curious,
        author: {
          connect: { id: authorId },
        },
      },
    });
  }

  @Mutation((returns) => Post, { nullable: true })
  async deleteAllPosts(): Promise<Prisma.BatchPayload> {
    return this.prismaService.post.deleteMany({});
  }
}
