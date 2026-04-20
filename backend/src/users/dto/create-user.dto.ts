import {
  IsString,
  Length,
  IsNotEmpty,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: '$property should be string',
  })
  @Length(3, 30, {
    message: '$property should be between $constraint1 and $constraint2',
  })
  @IsNotEmpty({
    message: '$property is required',
  })
  username: string;

  @IsEmail(
    {},
    {
      message: '$property has wrong pattern',
    },
  )
  @IsNotEmpty({
    message: '$property is required',
  })
  email: string;

  @IsString({
    message: '$property should be string',
  })
  @IsOptional()
  avatarUrl?: string;

  @IsString({
    message: '$property should be string',
  })
  @Length(6, 20, {
    message: '$property should be between $constraint1 and $constraint2',
  })
  @IsNotEmpty({
    message: '$property is required',
  })
  password: string;
}
