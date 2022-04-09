import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import {
  mockLogin,
  mockUserInvalido,
  mockUserValidado,
} from '../../common/mock-auth';
import { mockUsuario } from '../../common/mock-user';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  const mockUser = {
    findOne: jest.fn(),
  };

  const mockJWT = {
    signAsync: jest.fn().mockReturnValue('fds8fs51fd8s78'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UserService,
        JwtService,
        { provide: getModelToken('Auth'), useValue: {} },
        { provide: getModelToken('User'), useValue: mockUser },
        { provide: JwtService, useValue: mockJWT },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('usuario valido', async () => {
    mockUser.findOne.mockReturnValue(mockUsuario);
    expect(await service.validarUsuario(mockLogin)).toEqual(mockUserValidado);
  });

  it('usuario invalido', async () => {
    mockUser.findOne.mockReturnValue(mockUserInvalido);

    await expect(service.validarUsuario(mockLogin)).rejects.toThrow();
  });
});
