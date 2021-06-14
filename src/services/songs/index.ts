import {
  AddSongVariables,
  UpdateSongVariables,
} from "../../setup/apiTypes/song";
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
  changeListenedStatus: async (songId: string): Promise<boolean> => {
    const response = await apiClient.put(
      apiRoutes.CHANGE_LISTENED_STATUS,
      undefined,
      {
        headers: {
          songId: songId,
        },
      }
    );

    return response.data;
  },
  rateSong: async (songId: string, rate: number): Promise<unknown> => {
    const { data } = await apiClient.put(apiRoutes.RATE_SONG, {
      songId,
      rate,
    });

    return data;
  },
  addSong: async (song: AddSongVariables): Promise<unknown> => {
    const response = await apiClient.post(apiRoutes.ADD_SONG, {
      ...song,
    });

    return response.data;
  },
  updateSong: async (song: UpdateSongVariables): Promise<unknown> => {
    const response = await apiClient.put(apiRoutes.UPDATE_SONG, {
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
  removeFromUserSongs: async (songId: string) => {
    const response = await apiClient.delete(
      apiRoutes.REMOVE_FROM_USER_SONGS(songId)
    );

    return response.data;
  },
};

export default SongsService;
