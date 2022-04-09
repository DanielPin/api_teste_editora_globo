import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;
}
