import { AddSongVariables } from "../../setup/apiTypes/song";
import apiClient from "../../setup/axios";
import apiRoutes from "../apiRoutes";
import { GetSongsResponse } from "./types";

const SongsService = {
  getSongs: async (): Promise<GetSongsResponse> => {
    const response = await apiClient.get(apiRoutes.SONGS);

    return response.data;
  },
  getUserSongs: async (): Promise<GetSongsResponse> => {
    const response = await apiClient.get(apiRoutes.USER_SONGS);

    return response.data;
  },
  changeListenedStatus: async (): Promise<boolean> => {
    const response = await apiClient.put(apiRoutes.RATE_SONG);

    return response.data;
  },
  rateSong: async (songId: string, rate: number): Promise<unknown> => {
    const response = await apiClient.put(apiRoutes.RATE_SONG, { songId, rate });

    return response.data;
  },
  addSong: async (song: AddSongVariables): Promise<unknown> => {
    const response = await apiClient.post(apiRoutes.ADD_SONG, {
      ...song,
    });

    return response.data;
  },
  addUserSong: async (songId: string): Promise<unknown> => {
    const response = await apiClient.post(apiRoutes.ADD_USER_SONG(songId));

    return response.data;
  },
  removeSong: async (songId: string) => {
    const response = await apiClient.delete(apiRoutes.REMOVE_SONG(songId));

    return response.data;
  },
};

export default SongsService;
