import { Connection } from './../models/connection';
import 'reflect-metadata';
import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(Connection)
export class ConnectionResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Connection])
   connections() {
    return this.prismaService.connection.findMany({});
  }

  @Mutation((returns) => Connection, { nullable: true })
  async deleteAllConnections(): Promise<Prisma.BatchPayload> {
    return this.prismaService.connection.deleteMany({});
  }
}
