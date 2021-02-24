import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Context,
  Args,
  ResolveField,
  Root,

} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Post } from '../models/post';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { CreatePostInput } from './createPostInput';
import { User } from 'src/models/user';

@Resolver(Post)
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}
  
  @ResolveField()
  author(@Root() post: Post): Promise<User | null> {
    return this.prismaService.post
      .findUnique({
        where: {
          id: post.id,
        },
      })
      .author()
  }

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
      authorName,
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
          connect: { name: authorName },
          // ensure that name in User model is unique at schema.prisma
        },
      },
    });
  }

  @Mutation((returns) => Post, { nullable: true })
  async deleteAllPosts(): Promise<Prisma.BatchPayload> {
    return this.prismaService.post.deleteMany({});
  }
}
