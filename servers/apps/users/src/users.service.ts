import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    // private readonly prisma: prismaService
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async login(loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;

      const user = { email, password };

      return user;
    } catch (error) {}
  }

  async getUsers(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async me(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async createUser(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async changePassword(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async forgatPassword(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async verifyForgetPasswordToken(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async resetPassword(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async socialLogin(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async otpLogin(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async verifyOtpCode(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  async sendOtpCode(registerDto: RegisterDto) {
    try {
      const { email, name, password } = registerDto;

      const user = { email, name, password };

      return user;
    } catch (error) {}
  }

  getHello(): string {
    return 'Hello World!';
  }
}
