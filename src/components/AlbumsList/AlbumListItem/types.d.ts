import { GetAlbumsResponseSingleItem } from "../../../services/albums/types";

export interface AlbumListItemProps {
  album: GetAlbumsResponseSingleItem;
  isUserAlbum?: boolean;
}
