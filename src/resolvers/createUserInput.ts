import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  headline: string;

  @Field({ nullable: true })
  name: string;
}
