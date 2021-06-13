import { GetSongsResponseSingleItem } from "../songs/types";

export interface GetAlbumsResponseSingleItem {
  id: string;
  title: string;
  authorName: string;
  rate: number;
  publicationYear: number;
  songs: GetSongsResponseSingleItem[];
}

export type GetAlbumsResponse = GetAlbumsResponseSingleItem[];
