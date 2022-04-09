import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import {
  mockCriarUsuario,
  mockUsuario,
  mockUsuarioDto,
} from '../../common/mock-user';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  const mock = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Buscar usuario pelo ID', async () => {
    mock.findById.mockReturnValue(mockUsuario);
    expect(await service.buscarUsuarioPorId('5e9f8f9f8f9f9f9f9f9f9f9')).toEqual(
      mockUsuario,
    );
  });

  it('Buscar usuario pelo login', async () => {
    mock.findOne.mockReturnValue(mockUsuario);
    expect(await service.buscarUsuario('teste')).toEqual(mockUsuario);
  });

  it('Criar usuario ', async () => {
    mock.create = jest.fn(() => ({
      save: jest.fn(() => mockUsuarioDto),
    }));
    expect(await service.criarUsuario(mockCriarUsuario)).toEqual(
      mockUsuarioDto,
    );
  });
});
