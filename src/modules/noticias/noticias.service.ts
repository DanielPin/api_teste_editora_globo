import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Moment } from 'moment';
import { Model } from 'mongoose';
import { UpdateNoticiaDTO } from './dto/update-noticia.dto';
import { Noticias } from './noticias';
const moment = require('moment');

@Injectable()
export class NoticiasService {
  constructor(
    @InjectModel('Noticias')
    private readonly noticiasModel: Model<Noticias>,
  ) {}

  async criarNoticia(noticia: Noticias) {
    await this.validarData(noticia.dataDePublicacao);
    const create = await this.noticiasModel.create(noticia);
    return await create.save();
  }

  async retornatodos() {
    return await this.noticiasModel.find().exec();
  }

  async retonaNoticiaEspecifica(id: string) {
    return await this.noticiasModel.findOne({ _id: id }).exec();
  }

  async atualizarNoticia(id: string, noticia: UpdateNoticiaDTO) {
    await this.noticiasModel.findByIdAndUpdate(id, noticia).exec();
    return this.retonaNoticiaEspecifica(id);
  }

  async excluirNoticia(id: string) {
    return await this.noticiasModel.deleteOne({ _id: id }).exec();
  }

  async validarData(data: string) {
    const dataValida = moment(data, 'DD/MM/YYY', true).isValid();

    if (!dataValida) {
      throw new BadRequestException(
        'Data de publicação inválida ou formato inválido. Formato aceito DD/MM/YYYY',
      );
    }

    const dataDigitada: Moment = moment(data, 'DD/MM/YYYY');

    const dataAtual: Moment = moment(
      moment().format('DD/MM/YYYY'),
      'DD/MM/YYYY',
    );

    if (dataDigitada.isBefore(dataAtual)) {
      throw new BadRequestException(
        'Data de publicação deve ser a partir da data atual',
      );
    }
  }
}
