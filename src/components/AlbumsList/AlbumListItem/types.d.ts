import { GetAlbumsResponseSingleItem } from "../../../services/albums/types";

export interface AlbumListItemProps {
  album: GetAlbumsResponseSingleItem;
  refetch: () => void;
  isUserAlbum?: boolean;
}
