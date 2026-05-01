import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import type { Request as TRequest } from 'express';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/details')
  async getUserDetails(@Request() req: TRequest) {
    const userId = (
      req as TRequest & { user: { id: number; username: string } }
    ).user.id;
    return await this.usersService.getUserDetails(userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.deleteUserById(id);
  }
}
