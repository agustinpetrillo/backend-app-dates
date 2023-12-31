import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
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
    const { name, last_name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      last_name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id, name: user.name });

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('The user does not exists!');

    const isPasswordMatches = await bcrypt.compare(password, user.password);
    if (!isPasswordMatches) throw new UnauthorizedException('Wrong password!');

    const token = this.jwtService.sign({ id: user._id, email: user.email });

    const data = {
      user: user,
      token,
    };

    return data;
  }
}
