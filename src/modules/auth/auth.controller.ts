import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from './auth';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() login: Auth) {
    const usuarioLogar = await this.authService.validarUsuario(login);
    return { user: usuarioLogar.usuario, token: usuarioLogar.token };
  }
}
