import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ nullable: true })
  content: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  userReaction: string;

  @Field({ nullable: true })
  published?: string;

  @Field({ nullable: true })
  videoUrl?: string;

  @Field({ nullable: true })
  commentCount: number;

  @Field({ nullable: true })
  authorId: number;

  @Field({ nullable: true })
  reactions: string;

  @Field({ nullable: true })
  liked: boolean;

  @Field({ nullable: true })
  clapped: boolean;

  @Field({ nullable: true })
  loved: boolean;

  @Field({ nullable: true })
  bright: boolean;

  @Field({ nullable: true })
  support: boolean;

  @Field({ nullable: true })
  curious: boolean;

  @Field({ nullable: true })
  variableReactionsCount: number;
}
