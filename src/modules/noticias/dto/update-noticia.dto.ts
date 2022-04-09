import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateNoticiaDTO {
  @IsString({ message: 'Titulo deve ser uma string' })
  @IsNotEmpty({ message: 'Titulo não pode ser vazio' })
  @IsOptional()
  @MinLength(10, { message: 'Titulo deve ter no mínimo 10 caracteres' })
  @MaxLength(100, { message: 'Titulo deve ter no máximo 100 caracteres' })
  @ApiProperty({
    description: 'Titulo da noticia. minCaracteres: 10, maxCaracteres: 100',
    example: 'Teste para a Editora Globo',
  })
  titulo?: string;

  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @IsOptional()
  @MinLength(500, { message: 'Descrição deve ter no mínimo 500 caracteres' })
  @MaxLength(7000, { message: 'Descrição deve ter no máximo 7000 caracteres' })
  @ApiProperty({
    description:
      'Descrição da noticia. minCaracteres: 500, maxCaracteres: 7000',
    example:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry(...)',
  })
  descricao?: string;

  @IsString({ message: 'Data de ser uma string no formato: DD/MM/YYYY' })
  @IsOptional()
  @IsNotEmpty({ message: 'Data não pode ser vazio' })
  @ApiProperty({
    description: 'Data deve ser uma string no formato: DD/MM/YYYY',
    example: '25/03/2022',
  })
  dataDePublicacao?: string;
}
