import { Recommendation } from './../models/recommendation';
import 'reflect-metadata';
import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(Recommendation)
export class RecommendationResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Recommendation])
   recommendations() {
    return this.prismaService.recommendation.findMany({});
  }

  @Mutation((returns) => Recommendation, { nullable: true })
  async deleteAllRecommendations(): Promise<Prisma.BatchPayload> {
    return this.prismaService.recommendation.deleteMany({});
  }
}
