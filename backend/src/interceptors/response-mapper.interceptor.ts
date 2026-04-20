import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

type TResponseDto<T> = {
  success: boolean;
  data: T;
};

@Injectable()
export class ResponseMapperInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<TResponseDto<any>>,
  ): Observable<TResponseDto<any>> | Promise<Observable<TResponseDto<any>>> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
