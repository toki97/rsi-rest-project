import { GetAlbumsResponse } from "../../services/albums/types";

export interface AlbumsListProps {
  albums: GetAlbumsResponse;
  areUsersAlbums?: boolean;
  refetch: () => void;
}
