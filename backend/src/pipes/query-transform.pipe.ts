import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class QueryTransformPipe implements PipeTransform {
  transform(value: string) {
    return value.split(',').map((query) => query.trim());
  }
}
