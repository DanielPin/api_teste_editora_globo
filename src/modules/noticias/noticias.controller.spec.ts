import { Test, TestingModule } from '@nestjs/testing';
import {
  mockCriarNoticia,
  mockNoticia,
  mockNoticias,
} from '../../common/mock-noticias';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';

describe('NoticiasController', () => {
  let controller: NoticiasController;

  const mock = {
    criarNoticia: jest.fn().mockReturnValue(mockNoticia),
    atualizarNoticia: jest.fn().mockReturnValue(mockNoticia),
    retornatodos: jest.fn().mockReturnValue(mockNoticias),
    retonaNoticiaEspecifica: jest.fn().mockReturnValue(mockNoticia),
    excluirNoticia: jest.fn().mockReturnValue(mockNoticia),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticiasController],
      providers: [{ provide: NoticiasService, useValue: mock }],
    }).compile();

    controller = module.get<NoticiasController>(NoticiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Listando todas as noticias', async () => {
    expect(await controller.listarTodas()).toEqual(mockNoticias);
  });

  it('Listando uma noticia especifica', async () => {
    expect(await controller.listarNoticia('624ca1342201feb7608fc7d9')).toEqual(
      mockNoticia,
    );
  });

  it('Criando uma noticia', async () => {
    expect(await controller.criarNoticia(mockCriarNoticia)).toEqual(
      mockNoticia,
    );
  });

  it('Atualizando uma noticia', async () => {
    expect(
      await controller.atualizarNoticia(
        '624ca1342201feb7608fc7d9',
        mockNoticia,
      ),
    ).toEqual(mockNoticia);
  });

  it('Excluindo uma noticia', async () => {
    expect(await controller.deletarNoticia('624ca1342201feb7608fc7d9')).toEqual(
      mockNoticia,
    );
  });
});
