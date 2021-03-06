import { Link } from "../../setup/apiTypes/link";

export interface GetSongsResponseSingleItem {
  id: string;
  title: string;
  authorName: string;
  rate: number;
  publicationYear: number;
  listened: boolean;
  links: Link[];
}

export type GetSongsResponse = GetSongsResponseSingleItem[];

export interface RateSongVariables {
  songId: string;
  rating: number;
}

export interface RemoveSongVariables {
  songId: string;
}

export interface AddUserSongVariables {
  songId: string;
}
