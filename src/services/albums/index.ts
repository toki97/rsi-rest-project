import apiClient from "../../setup/axios";
import apiRoutes from "../apiRoutes";
import { GetAlbumsResponse } from "./types";

const AlbumsService = {
  getAlbums: async (): Promise<GetAlbumsResponse> => {
    const response = await apiClient.get<GetAlbumsResponse>(apiRoutes.ALBUMS);

    return response.data;
  },
  getUserAlbums: async (): Promise<GetAlbumsResponse> => {
    const response = await apiClient.get<GetAlbumsResponse>(
      apiRoutes.USER_ALBUMS
    );

    return response.data;
  },
  addToUserAlbums: async (albumId: string): Promise<unknown> => {
    const response = await apiClient.post(apiRoutes.ADD_USER_ALBUM(albumId));

    return response.data;
  },
  removeFromUsersAlbums: async (albumId: string): Promise<unknown> => {
    const response = await apiClient.delete(
      apiRoutes.REMOVE_USER_ALBUM(albumId)
    );

    return response.data;
  },
  rateAlbum: async (albumId: string, rate: number): Promise<unknown> => {
    const response = await apiClient.put(apiRoutes.RATE_ALBUM, {
      discId: albumId,
      rate,
    });

    return response.data;
  },
};

export default AlbumsService;
