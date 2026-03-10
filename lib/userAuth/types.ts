export type ApiErrorDetail = {
  msg?: string;
  message?: string;
  path?: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: ApiErrorDetail[];
};

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'ADMIN' | 'SUB_ADMIN' | 'USER';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone?: string;
};

export type RegisterResponseData = {
  user: AuthUser;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponseData = {
  user: AuthUser;
  accessToken: string;
};
