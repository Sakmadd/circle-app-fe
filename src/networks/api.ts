import axios, { AxiosResponse } from 'axios';
import { UserType } from '../types/types';
import { LoginDataType, RegisterDataType } from '../validators/formType';
import { CONFIGS } from '../configs/config';

class API {
  async REGISTER(data: RegisterDataType): Promise<AxiosResponse> {
    try {
      return await axios.post(`${CONFIGS.API_URL}/auth/register`, {
        username: data.username,
        name: data.name,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async LOGIN(data: LoginDataType): Promise<string> {
    try {
      const response: AxiosResponse = await axios.post(
        `${CONFIGS.API_URL}/auth/login`,
        {
          username: data.username,
          password: data.password,
        }
      );
      const token: string = response.data.data.token;
      this.SET_TOKEN(token);

      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }
  async GET_LOGGED_USER(): Promise<UserType> {
    try {
      const response: AxiosResponse = await axios.get(
        `${CONFIGS.API_URL}/users/self`,
        {
          headers: {
            Authorization: `${this.GET_TOKEN()}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }
  SET_TOKEN(payload: string): void {
    localStorage.setItem('token', payload);
  }
  GET_TOKEN(): string | null {
    return localStorage.getItem('token');
  }
}

export default new API();
