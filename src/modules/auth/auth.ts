import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Auth {
  @IsNotEmpty({ message: 'Login obrigatório' })
  @ApiProperty()
  login: string;

  @IsNotEmpty({ message: 'Password obrigatório' })
  @ApiProperty()
  password: string;
}
