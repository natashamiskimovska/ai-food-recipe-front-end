import axios, { AxiosResponse } from "axios";

import toast from "react-hot-toast";
import { axiosInstance } from "../config";
import { Endpoints } from "../config/endpoints";

export class AuthApi {
  setToken = (response: AxiosResponse) => {
    const token = response.data.token;
    localStorage.setItem("token", token);
  };

  setUser = (response: AxiosResponse) => {
    const user = JSON.stringify(response.data.user);
    localStorage.setItem("user", user);
  };

  getUser = () => { return JSON.parse(localStorage.getItem('user') ?? '') };

  getUserId = () => { return this.getUser() ? this.getUser().id : null };

  login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post(Endpoints.login, {
        email,
        password,
      });

      this.setToken(response);
      this.setUser(response);

      return response;
    } catch (error) {
      toast.error("Incorrect e-mail or password");
      if (axios.isAxiosError(error)) {
      }
    }
  };
  logout = async () => {
    try {
      const response = await axiosInstance.post(Endpoints.logout);
      localStorage.clear();
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  };

  register = async (
    first_name: string,
    last_name: string,
    type: number,
    email: string,
    password: string,
    password_confirmation: string
  ) => {
    try {
      const name = `${first_name} ${last_name}`;
      const response = await axiosInstance.post(Endpoints.register, {
        name,
        type,
        email,
        password,
        password_confirmation
      });
      this.setToken(response);
      
      return response;
    } catch (error) { }
  };

  validateToken = async (token: string) => {
    try {
      const response = await axiosInstance.get(Endpoints.validateToken(token));
      localStorage.setItem("token", token);
      return response;
    } catch (error) { }
  };
}