import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name, {
    timestamp: true,
  });
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      throw exception;
    }

    //
    this.logger.error(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      `Exception: ${exception.message}, stack: ${exception.stack}`,
    );

    response.status(status).json({
      message: 'Internal Server Error',
      status,
    });
  }
}
