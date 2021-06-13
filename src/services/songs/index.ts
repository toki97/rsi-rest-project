import { AddSongVariables } from "../../setup/apiTypes/song";
import apiClient from "../../setup/axios";
import apiRoutes from "../apiRoutes";
import { GetSongsResponse } from "./types";

const SongsService = {
  getSongs: async (): Promise<GetSongsResponse> => {
    const response = await apiClient.get(apiRoutes.SONGS);

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
  addSong: async (userId: string, song: AddSongVariables): Promise<unknown> => {
    const response = await apiClient.post(apiRoutes.ADD_SONG(userId), {
      ...song,
    });

    return response.data;
  },
  removeSong: async (songId: string) => {
    const response = await apiClient.delete(apiRoutes.REMOVE_SONG(songId));

    return response.data;
  },
};

export default SongsService;
