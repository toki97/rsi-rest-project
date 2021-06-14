import { GetSongsResponseSingleItem } from "../../../services/songs/types";

export interface SongListItemProps {
  song: GetSongsResponseSingleItem;
  refetch: () => void;
  albumView?: boolean;
  isUserSong?: boolean;
}
