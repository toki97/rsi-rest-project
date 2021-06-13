import { useQuery } from "react-query";
import AlbumsService from "../../services/albums";
import { GetAlbumsResponse } from "../../services/albums/types";
import apiRoutes from "../../services/apiRoutes";

export const useAlbumsList = () => {
  const { data: albums } = useQuery<GetAlbumsResponse>(
    apiRoutes.ALBUMS,
    AlbumsService.getAlbums
  );

  return albums ?? [];
};
