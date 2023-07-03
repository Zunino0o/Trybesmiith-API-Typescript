import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/ServiceResponse';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

async function login(payload: Login): Promise<ServiceResponse<Token>> {
  if (!payload.username || !payload.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const foundUser = await UserModel.findOne({ where: { username: payload.username } });

  if (!foundUser || !bcrypt.compareSync(payload.password, foundUser.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    };
  }

  const { id, username } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, username });

  return { status: null, data: { token } };
}

export default {
  login,
};
