import { IPayload } from "../../models/Base";
import { IPutUser, IUser } from "../../models/User";
import { axiosInstance } from "../config";
import { Endpoints } from "../config/endpoints";

export class UserApi {
  getUserIUsers = async () => {
    const response = await axiosInstance.get<IPayload<IUser[]>>(
      Endpoints.getUsers
    );
    return response;
  };

  private postUserIUser = async (id: number, params: IUser) => {
    const response = await axiosInstance.post<IPayload<IUser>>(
      Endpoints.postUser,
      params
    );
    return response;
  };

  postChat = async (
    type: string,
    include_only: boolean,
    can_include: string | null,
    limit_calories: number | null) => {
    const response = await axiosInstance.post(
      Endpoints.postChat,
      {
        type, include_only, can_include, limit_calories
      }
    );
    return response;
  };

  getChats = async () => {
    const response = await axiosInstance.get(
      Endpoints.getChats
    );
    return response;
  };
}