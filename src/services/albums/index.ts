import apiClient from "../../setup/axios";
import apiRoutes from "../apiRoutes";
import { GetAlbumsResponse } from "./types";

const AlbumsService = {
  getAlbums: async (): Promise<GetAlbumsResponse> => {
    const response = await apiClient.get<GetAlbumsResponse>(apiRoutes.ALBUMS);

    return response.data;
  },
};

export default AlbumsService;
