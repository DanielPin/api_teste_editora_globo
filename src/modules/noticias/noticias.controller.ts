import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UpdateNoticiaDTO } from './dto/update-noticia.dto';
import { Noticias } from './noticias';
import { NoticiasService } from './noticias.service';

@ApiTags('noticias')
@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarNoticia(@Body() noticia: Noticias) {
    return this.noticiasService.criarNoticia(noticia);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async atualizarNoticia(
    @Param('id') id: string,
    @Body() noticia: UpdateNoticiaDTO,
  ) {
    return this.noticiasService.atualizarNoticia(id, noticia);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async listarTodas() {
    return this.noticiasService.retornatodos();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async listarNoticia(@Param('id') id: string) {
    return this.noticiasService.retonaNoticiaEspecifica(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deletarNoticia(@Param('id') id: string) {
    return this.noticiasService.excluirNoticia(id);
  }
}
