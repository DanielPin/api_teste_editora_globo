import { UserService } from './../user/user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { mockLogin, mockUserValidadoController } from '../../common/mock-auth';
import { mockUsuario } from '../../common/mock-user';

describe('AuthController', () => {
  let controller: AuthController;

  const mockUser = {
    findOne: jest.fn(),
  };

  const mockJWT = {
    signAsync: jest.fn().mockReturnValue('fds8fs51fd8s78'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        JwtService,
        { provide: getModelToken('Auth'), useValue: {} },
        { provide: getModelToken('User'), useValue: mockUser },
        { provide: JwtService, useValue: mockJWT },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('realizar login', async () => {
    mockUser.findOne.mockReturnValue(mockUsuario);
    expect(await controller.login(mockLogin)).toEqual(
      mockUserValidadoController,
    );
  });
});
