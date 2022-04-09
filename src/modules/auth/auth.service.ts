import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Auth } from './auth';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validarUsuario(login: Auth) {
    const usuario = await this.userService.buscarUsuario(login.login);

    const valido = await bcrypt.compare(login.password, usuario.password);
    if (!valido) {
      throw new UnauthorizedException('Login ou senha inválidos');
    }

    const token = await this.jwtToken(usuario);

    return {
      usuario: usuario.login,
      token,
    };
  }

  private async jwtToken(user: User) {
    const payload = { username: user.login, sub: user._id };

    return this.jwtService.signAsync(payload);
  }
}
