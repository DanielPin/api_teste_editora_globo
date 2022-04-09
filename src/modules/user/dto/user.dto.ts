import { User } from '../user';

export class UserDto {
  constructor(user: User) {
    this.login = user.login;
    this._id = user._id;
  }
  _id: string;
  login: string;
}
