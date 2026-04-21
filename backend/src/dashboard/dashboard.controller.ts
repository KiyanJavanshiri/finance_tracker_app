import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import type { Request as TRequest } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { JWTCustomPayload } from 'src/utils/types';

@UseGuards(AuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  async getDashboardOverview(@Request() req: TRequest) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    return await this.dashboardService.getDashboardOverview(userId);
  }
}
