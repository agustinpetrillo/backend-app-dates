import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/schemas/user.schema';
import { SignUpDto } from 'src/dto/auth/signUp.dto';
import { LoginDto } from 'src/dto/auth/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id, name: user.name });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('The user does not exists');

    const isPasswordMatches = await bcrypt.compare(password, user.password);
    if (!isPasswordMatches)
      throw new UnauthorizedException('The password is wrong');

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}
