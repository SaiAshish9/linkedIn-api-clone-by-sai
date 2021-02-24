import { Controller, Get,Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Redirect("/graphql",301)
  hello(){}
}
