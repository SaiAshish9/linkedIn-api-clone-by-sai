import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  content: string | null;

  @Field((type) => String, { nullable: true })
  image: string | null;

  @Field((type) => String, { nullable: true })
  userReaction: string | null;

  @Field((type) => String, { nullable: true })
  published?: string | null;

  @Field((type) => String, { nullable: true })
  videoUrl?: string | null;

  @Field((type) => User, { nullable: true })
  author?: User | null;

  @Field((type) => Number, { nullable: true })
  commentCount: number | null;

  @Field((type) => Number, { nullable: true })
  reactions: number | null;

  @Field((type) => Boolean, { nullable: true })
  liked: boolean | null;

  @Field((type) => Boolean, { nullable: true })
  clapped: boolean | null;

  @Field((type) => Boolean, { nullable: true })
  loved: boolean | null;

  @Field((type) => Boolean, { nullable: true })
  bright: boolean | null;

  @Field((type) => Boolean, { nullable: true })
  support: boolean | null;

  @Field((type) => Boolean, { nullable: true })
  curious: boolean | null;

  @Field((type) => Number, { nullable: true })
  variableReactionsCount: number | null;
}
