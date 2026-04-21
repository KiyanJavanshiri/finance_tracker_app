import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { IsCorrectCategory } from 'src/utils/IsCorrectCategory';
import { type TransactionCategory, TransactionEnum } from 'src/utils/types';

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
    message:
      '$property should be one of the provided variants: income or expense',
  })
  @IsNotEmpty({
    message: '$property is required',
  })
  type: TransactionEnum;

  @Validate(IsCorrectCategory)
  @IsNotEmpty({
    message: '$property is required',
  })
  category: TransactionCategory;

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
