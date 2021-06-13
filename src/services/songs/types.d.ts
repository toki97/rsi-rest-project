import { Link } from "../../setup/apiTypes/link";

export interface GetSongsResponseSingleItem {
  id: string;
  title: string;
  authorName: string;
  rate: number;
  publicationYear: number;
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
