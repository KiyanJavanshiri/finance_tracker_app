import {
  IsDate,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { TransactionEnum } from 'src/utils/types';

export class CreateTransactionDto {
  @IsDecimal(
    {
      decimal_digits: '2',
    },
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
