import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('callback')
  handleCallback(@Query('code') code: string): { message: string; code: string } {
    console.log('Authorization code received:', code);
    return { message: 'Authorization code received', code };
  }
}