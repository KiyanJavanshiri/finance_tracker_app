import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PaginationTransformPipe implements PipeTransform {
  transform(value: any) {
    if (value === undefined) return undefined;
    const tranformedVal = parseInt(value, 10);
    if (isNaN(tranformedVal)) {
      throw new BadRequestException('Wrong pagination value type');
    }
    return tranformedVal;
  }
}
