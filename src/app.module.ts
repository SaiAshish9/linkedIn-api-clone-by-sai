import { PostResolver } from './resolvers/resolvers.post';
import { UserResolver } from './resolvers/resolvers.user';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService,UserResolver,PostResolver],
})
export class AppModule {}
