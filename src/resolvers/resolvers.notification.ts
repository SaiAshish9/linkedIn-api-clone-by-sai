import 'reflect-metadata';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Notification } from '../models/notification';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(Notification)
export class NotificationResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Notification])
   notifications() {
    return this.prismaService.notification.findMany({});
  }

  // @Mutation((returns) => )
  // async createUser(@Args('data') data: CreateUserInput): Promise<User> {
  //   return this.prismaService.user.create({
  //     data: {
  //       name: data.name,
  //       image: data.image,
  //       headline: data.headline,
  //     },
  //   });
  // }

  @Mutation((returns) => Notification, { nullable: true })
  async deleteAllNotifications(): Promise<Prisma.BatchPayload> {
    return this.prismaService.notification.deleteMany({});
  }
}
