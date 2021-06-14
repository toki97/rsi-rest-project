import { GetSongsResponseSingleItem } from "../../../services/songs/types";

export interface SongListItemProps {
  song: GetSongsResponseSingleItem;
  albumView?: boolean;
  isUserSong?: boolean;
}
