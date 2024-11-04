import axios, { AxiosResponse } from 'axios';
import { CONFIGS } from '../configs/config';
import {
  DetailedFeedType,
  EditUserDataType,
  FeedType,
  FollowType,
  LikeType,
  ProviderUserData,
  ReplyType,
  UserType,
} from '../types/types';
import {
  ForgotDataType,
  LoginDataType,
  RegisterDataType,
  ResetDataType,
} from '../validators/formType';

class API {
  async LOGIN_PROVIDER(provider: string): Promise<string> {
    try {
      const response = await axios.post(
        `${CONFIGS.API_URL}/auth/login/${provider}`
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async AUTH_CALLBACK_PROVIDER(data: ProviderUserData): Promise<string> {
    try {
      const response = await axios.post(`${CONFIGS.API_URL}/auth/callback`, {
        id: data.id,
        username: data.username,
        name: data.name,
        email: data.email,
      });
      const token: string = response.data.data;
      this.SET_TOKEN(token);
      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
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
  async EDIT_USER(data: EditUserDataType): Promise<UserType> {
    try {
      const response = await axios.patch(`${CONFIGS.API_URL}/users`, data, {
        headers: { Authorization: this.GET_TOKEN() },
      });
      return response.data.data;
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
  async GET_SINGLE_USER(id: string): Promise<UserType> {
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
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async FOLLOW_USER(id: string): Promise<FollowType> {
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
  async UNFOLLOW_USER(id: string): Promise<FollowType> {
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
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async SEARCH_USER(keyword: string): Promise<UserType[]> {
    try {
      const response = await axios.get(
        `${CONFIGS.API_URL}/users/search?keyword=${keyword}`,
        {
          headers: {
            Authorization: this.GET_TOKEN(),
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
  async GET_ALL_FEEDS(): Promise<FeedType[]> {
    try {
      const response = await axios.get(`${CONFIGS.API_URL}/feeds`, {
        headers: { Authorization: this.GET_TOKEN() },
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async GET_USER_FEEDS(id: string): Promise<FeedType[]> {
    try {
      const response = await axios.get(`${CONFIGS.API_URL}/feeds/user/${id}`, {
        headers: { Authorization: this.GET_TOKEN() },
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async GET_SINGLE_FEED(id: number): Promise<DetailedFeedType> {
    try {
      const response = await axios.get(`${CONFIGS.API_URL}/feeds/${id}`, {
        headers: { Authorization: this.GET_TOKEN() },
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async CREATE_FEED(data: FormData): Promise<string> {
    try {
      const response = await axios.post(`${CONFIGS.API_URL}/feeds`, data, {
        headers: { Authorization: this.GET_TOKEN() },
      });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async DELETE_FEED(id: number): Promise<FeedType> {
    try {
      const response = await axios.delete(`${CONFIGS.API_URL}/feeds/${id}`, {
        headers: { Authorization: this.GET_TOKEN() },
      });

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw error;
    }
  }
  async REPLY_FEED(data: FormData): Promise<ReplyType> {
    try {
      const response = await axios.post(
        `${CONFIGS.API_URL}/replies/create`,
        data,
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
  async DELETE_REPLY(id: number): Promise<ReplyType> {
    try {
      const response = await axios.delete(
        `${CONFIGS.API_URL}/replies/delete/${id}`,
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
  async TOGGLE_LIKE(id: number): Promise<LikeType> {
    try {
      const response = await axios.post(
        `${CONFIGS.API_URL}/likes/${id}`,
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
  SET_TOKEN(payload: string): void {
    localStorage.setItem('token', payload);
  }
  GET_TOKEN(): string | null {
    return localStorage.getItem('token');
  }
}

export default new API();
