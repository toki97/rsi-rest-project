import { GetSongsResponseSingleItem } from "../../services/songs/types";

export interface SongsListProps {
  songs: GetSongsResponseSingleItem[];
  refetch: () => void;
  albumView?: boolean;
  areUsersSongs?: boolean;
}
