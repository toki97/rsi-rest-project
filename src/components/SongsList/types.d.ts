import { GetSongsResponseSingleItem } from "../../services/songs/types";

export interface SongsListProps {
  songs: GetSongsResponseSingleItem[];
  albumView?: boolean;
  areUsersSongs?: boolean;
}
