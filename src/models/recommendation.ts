import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Recommendation {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  image?: string | null;

  @Field((type) => String, { nullable: true })
  title: string | null;

  @Field((type) => String, { nullable: true })
  company: string | null;

  @Field((type) => String, { nullable: true })
  location: string | null;

  @Field((type) => Boolean, { nullable: true })
  easyApply: boolean | null;
}
