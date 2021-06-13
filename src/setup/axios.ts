import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://167.172.189.228:8080/",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    ...(token
      ? {
          Authorization: `Basic ${token}`,
        }
      : {}),
  };

  return config;
});

export default apiClient;
