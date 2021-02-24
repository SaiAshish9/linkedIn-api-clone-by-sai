import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => String, { nullable: true })
  headline?: string | null;

  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null;

  @Field((type) => String, { nullable: true })
  image?: string | null;
}
