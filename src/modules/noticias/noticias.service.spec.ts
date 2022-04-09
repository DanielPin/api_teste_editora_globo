import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import {
  mockCriarNoticia,
  mockCriarNoticiaComDataAnteriorAAtual,
  mockCriarNoticiaComDataInvalida,
  mockNoticia,
  mockNoticias,
} from '../../common/mock-noticias';
import { Noticias } from './noticias';
import { NoticiasService } from './noticias.service';

describe('NoticiasService', () => {
  let service: NoticiasService;
  let model: Model<Noticias>;

  const mock = {
    constructor: jest.fn().mockResolvedValue({}),
    new: jest.fn().mockResolvedValue({}),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    deleteOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    exec: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoticiasService,
        {
          provide: getModelToken('Noticias'),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<NoticiasService>(NoticiasService);
    model = module.get<Model<Noticias>>(getModelToken('Noticias'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('teste listagem de noticias', () => {
    it('deve retornar todas as noticias', async () => {
      mock.find = jest.fn(() => ({
        exec: jest.fn(() => mockNoticias),
      }));

      expect(await service.retornatodos()).toEqual(mockNoticias);
    });

    it('deve retornar somente a noticia solicitada', async () => {
      mock.findOne = jest.fn(() => ({
        exec: jest.fn(() => mockNoticia),
      }));

      expect(
        await service.retonaNoticiaEspecifica('624ca1342201feb7608fc7d9'),
      ).toEqual(mockNoticia);
    });
  });

  describe('teste criação de noticia', () => {
    it('deve criar uma nova noticia', async () => {
      mock.create = jest.fn(() => ({
        save: jest.fn(() => mockNoticia),
      }));

      const a = await service.criarNoticia(mockCriarNoticia);

      expect(a).toEqual(mockNoticia);
    });

    it('tentativa de criar noticia com data anterior a atual', async () => {
      mock.create = jest.fn(() => ({
        save: jest.fn(() => mockNoticia),
      }));

      await expect(
        service.criarNoticia(mockCriarNoticiaComDataAnteriorAAtual),
      ).rejects.toThrow(BadRequestException);
    });

    it('tentativa de criar noticia com data invalida', async () => {
      mock.create = jest.fn(() => ({
        save: jest.fn(() => mockNoticia),
      }));

      await expect(
        service.criarNoticia(mockCriarNoticiaComDataInvalida),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('teste exclusão de noticia', () => {
    it('deve excluir uma noticia', async () => {
      mock.deleteOne = jest.fn(() => ({
        exec: jest.fn(() => mockNoticia),
      }));

      expect(await service.excluirNoticia('624ca1342201feb7608fc7d9')).toEqual(
        mockNoticia,
      );
    });
  });

  describe('teste atualização de noticia', () => {
    it('deve atualizar uma noticia', async () => {
      mock.findByIdAndUpdate = jest.fn(() => ({
        exec: jest.fn(() => mockNoticia),
      }));

      expect(
        await service.atualizarNoticia('624ca1342201feb7608fc7d9', mockNoticia),
      ).toEqual(mockNoticia);
    });
  });
});
