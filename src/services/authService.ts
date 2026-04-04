import apiClient from './apiClient';

export interface AuthPayload {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  token: string;
}

export const authService = {
  async login(payload: AuthPayload) {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/login', payload);
    localStorage.setItem('token', data.token);
    return data;
  },
  async register(payload: AuthPayload) {
    const { data } = await apiClient.post<AuthResponse>('/api/auth/register', payload);
    localStorage.setItem('token', data.token);
    return data;
  },
  logout() {
    localStorage.removeItem('token');
  }
};
