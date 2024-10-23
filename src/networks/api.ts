import axios, { AxiosResponse } from 'axios';
import { CONFIGS } from '../configs/config';
import { FollowType, UserType } from '../types/types';
import {
  ForgotDataType,
  LoginDataType,
  RegisterDataType,
  ResetDataType,
} from '../validators/formType';

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
      if (response.data.error) {
        throw new Error(response.data.message);
      }

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
  async FORGOT(data: ForgotDataType): Promise<string> {
    try {
      const response: AxiosResponse = await axios.post(
        `${CONFIGS.API_URL}/auth/forgot`,
        {
          email: data.email,
        }
      );
      return response.data.data.token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }
  async RESET_PASSWORD(
    data: ResetDataType,
    token: string
  ): Promise<AxiosResponse> {
    try {
      return await axios.patch(
        `${CONFIGS.API_URL}/auth/reset`,
        {
          password: data.newPassword,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
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
  async GET_ALL_USERS(): Promise<UserType[]> {
    try {
      const response = await axios.get(`${CONFIGS.API_URL}/users`, {
        headers: {
          Authorization: this.GET_TOKEN(),
        },
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }
  async GET_SINGLE_USER(id: number): Promise<UserType> {
    try {
      const response = await axios.get(
        `${CONFIGS.API_URL}/users/detail/${id}`,
        {
          headers: {
            Authorization: this.GET_TOKEN(),
          },
        }
      );
      return response.data.data;
    } catch (error) {
      if (axios.AxiosError) {
        throw error;
      }
      throw error;
    }
  }
  async FOLLOW_USER(id: number): Promise<FollowType> {
    try {
      const response = await axios.post(
        `${CONFIGS.API_URL}/follows/add/${id}`,
        {},
        { headers: { Authorization: this.GET_TOKEN() } }
      );

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }
  async UNFOLLOW_USER(id: number): Promise<FollowType> {
    try {
      const response = await axios.delete(
        `${CONFIGS.API_URL}/follows/remove/${id}`,
        {
          headers: {
            Authorization: this.GET_TOKEN(),
          },
        }
      );

      return response.data.data;
    } catch (error) {
      if (axios.AxiosError) {
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
