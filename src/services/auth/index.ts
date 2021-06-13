import apiClient from "../../setup/axios";
import { LoginResponse } from "./types";

const AuthService = {
  login: async (username: string, password: string): Promise<string | null> => {
    try {
      await apiClient.get<LoginResponse>("/login", {
        withCredentials: false,
        auth: { username, password },
      });

      return btoa(`${username}:${password}`);
    } catch (error) {
      return null;
    }
  },
};

export default AuthService;
