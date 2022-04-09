import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User } from './user';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async criarUsuario(user: CreateUserDto) {
    user.password = await bcrypt.hash(user.password, 10);
    const createdUser = await this.userModel.create(user);
    return new UserDto(await createdUser.save());
  }

  async buscarUsuario(login: string) {
    return this.userModel.findOne({ login });
  }

  async buscarUsuarioPorId(id: string) {
    return this.userModel.findById({ _id: id });
  }
}
