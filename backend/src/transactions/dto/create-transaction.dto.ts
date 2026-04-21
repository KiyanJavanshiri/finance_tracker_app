import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TransactionEnum } from 'src/utils/types';

export class CreateTransactionDto {
  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        '$property should be decimal with $constraint1 digits in the end',
    },
  )
  @IsNotEmpty({
    message: '$property is required',
  })
  amount: number;

  @IsEnum(TransactionEnum, {
    message: '$property should be one of the provided variants: $constraint1',
  })
  @IsNotEmpty({
    message: '$property is required',
  })
  type: TransactionEnum;

  @Type(() => Date)
  @IsDate({
    message: '$property should be date',
  })
  @IsNotEmpty({
    message: '$property is required',
  })
  date: Date;

  @IsString({
    message: '$property should be string',
  })
  @IsOptional()
  description?: string;
}
