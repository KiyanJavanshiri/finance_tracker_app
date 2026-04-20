import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import bcrypt from 'bcryptjs';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterUserDto) {
    const user = await this.usersService.getUserByEmail(dto.email);

    if (user) {
      throw new BadRequestException('User is already exists');
    }

    const hashedPassword = await this.getHashedPassword(dto.password);

    return this.usersService.createUser({ ...dto, password: hashedPassword });
  }

  async login(dto: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('User was not found');
    }

    const isCorrectPassword = await this.checkHashedPassword(
      dto.password,
      user.password,
    );

    if (!isCorrectPassword) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const access_token = await this.getGeneratedToken({
      id: user.id,
      username: user.username,
    });

    return {
      access_token,
    };
  }

  private async getHashedPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  private async checkHashedPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  private async getGeneratedToken(payload: { id: number; username: string }) {
    return await this.jwtService.signAsync(payload);
  }
}
