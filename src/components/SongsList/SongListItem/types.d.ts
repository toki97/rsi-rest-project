import { GetSongsResponseSingleItem } from "../../../services/songs/types";

export interface SongListItemProps {
  song: GetSongsResponseSingleItem;
  isUserSong?: boolean;
}
