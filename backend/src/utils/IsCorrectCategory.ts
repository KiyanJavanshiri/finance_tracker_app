import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { TransactionCategoryIncome, TransactionCategoryExpense } from './types';

@ValidatorConstraint({ name: 'isCorrectCategory', async: false })
export class IsCorrectCategory implements ValidatorConstraintInterface {
  validate(category: any, args: ValidationArguments) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const obj = args.object as any;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (obj.type === 'income') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return Object.values(TransactionCategoryIncome).includes(category);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (obj.type === 'expense') {
      return Object.values(TransactionCategoryExpense).includes(category);
    }

    return false;
  }

  defaultMessage() {
    return 'Category does not match transaction type';
  }
}
