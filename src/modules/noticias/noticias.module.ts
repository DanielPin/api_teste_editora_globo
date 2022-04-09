import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiasSchema } from './schemas/noticias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Noticias', schema: NoticiasSchema }]),
  ],
  providers: [NoticiasService],
  controllers: [NoticiasController],
})
export class NoticiasModule {}
