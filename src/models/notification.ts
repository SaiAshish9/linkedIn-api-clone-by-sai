import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Notification {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  image: string | null;

  @Field((type) => String, { nullable: true })
  text1: string | null;

  @Field((type) => String, { nullable: true })
  text2: string | null;

  @Field((type) => String, { nullable: true })
  text3: string | null;

  @Field((type) => String, { nullable: true })
  published: string | null;
}
