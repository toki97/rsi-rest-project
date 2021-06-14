import { useQuery } from "react-query";
import apiRoutes from "../../services/apiRoutes";
import SongsService from "../../services/songs";
import { GetSongsResponse } from "../../services/songs/types";

export const useUserSongsList = () => {
  const { data: songs, refetch } = useQuery<GetSongsResponse>(
    apiRoutes.USER_SONGS,
    SongsService.getUserSongs
  );

  return {
    songs: songs ?? [],
    refetch,
  };
};
