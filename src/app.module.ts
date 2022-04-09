import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiasModule } from './modules/noticias/noticias.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NoticiasModule,
    MongooseModule.forRoot(
      'mongodb://root:example@mongo:27017/teste_editora_globo?authSource=admin',
    ),
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
