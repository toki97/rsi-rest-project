import { GetSongsResponseSingleItem } from "../../services/songs/types";

export interface SongsListProps {
  songs: GetSongsResponseSingleItem[];
  areUsersSongs?: boolean;
}
