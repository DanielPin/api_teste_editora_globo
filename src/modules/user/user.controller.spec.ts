import { Test, TestingModule } from '@nestjs/testing';
import { mockUsuarioDto, mockCriarUsuario } from '../../common/mock-user';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  const mock = {
    criarUsuario: jest.fn().mockReturnValue(mockUsuarioDto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mock }],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('criar um usuario', async () => {
    expect(await controller.criarNovoUsuario(mockCriarUsuario)).toEqual(
      mockUsuarioDto,
    );
  });
});
