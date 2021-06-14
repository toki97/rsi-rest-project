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

export interface AddUserAlbumVariables {
  albumId: string;
}

export interface RemoveFromUserAlbumsVariables {
  albumId: string;
}

export interface RateAlbumVariables {
  albumId: string;
  rating: number;
}
