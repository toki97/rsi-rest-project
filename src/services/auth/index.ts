import apiClient from "../../setup/axios";

const AuthService = {
  login: async (username: string, password: string) => {
    try {
      const response = await apiClient.get("/login", {
        withCredentials: false,
        auth: { username, password },
      });

      return response;
    } catch (error) {
      return null;
    }
  },
};

export default AuthService;
