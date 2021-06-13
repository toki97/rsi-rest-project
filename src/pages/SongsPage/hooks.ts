import { useQuery } from "react-query";
import apiRoutes from "../../services/apiRoutes";
import SongsService from "../../services/songs";
import { GetSongsResponse } from "../../services/songs/types";

export const useSongsList = () => {
  const { data: songs } = useQuery<GetSongsResponse>(
    apiRoutes.SONGS,
    SongsService.getSongs
  );

  return songs ?? [];
};
