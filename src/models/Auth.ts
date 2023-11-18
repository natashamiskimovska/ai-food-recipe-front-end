import { IAddress } from "./User";

export interface ILogin {
  email: string;
  password: string;
}

export interface IPassword {
  current_password: string;
  password: string;
  password_confirmation: string;
}

export interface IAuthData {
  _id: {};
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  role: string;
  avatar_url: string;
  isEmailVerified: boolean;
  addresses: IAddress;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IAuthPayload {
  data: IAuthData;
  meta: {
    code: number;
    message: string;
    token: string;
  };
}