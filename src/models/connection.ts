import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Connection {
  @Field((type) => ID)
  id: number;

  @Field((type) => String, { nullable: true })
  title: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Number, { nullable: true })
  count?: number | null;

  @Field((type) => String, { nullable: true })
  background?: string | null;

  @Field((type) => String, { nullable: true })
  avatar?: string | null;
}
