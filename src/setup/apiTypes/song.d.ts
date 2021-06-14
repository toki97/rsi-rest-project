export interface AddSongVariables {
  title: string;
  authorName: string;
  publicationYear: number;
}

export interface UpdateSongVariables {
  id: string;
  title: string;
  authorName: string;
  publicationYear: number;
}

export interface ChangeListenedStatusVariables {
  songId: string;
}
