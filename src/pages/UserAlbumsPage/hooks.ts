import { useQuery } from "react-query";
import AlbumsService from "../../services/albums";
import { GetAlbumsResponse } from "../../services/albums/types";
import apiRoutes from "../../services/apiRoutes";

export const useUserAlbumsList = () => {
  const { data: albums, refetch } = useQuery<GetAlbumsResponse>(
    apiRoutes.USER_ALBUMS,
    AlbumsService.getUserAlbums
  );

  return {
    albums: albums ?? [],
    refetch,
  };
};
