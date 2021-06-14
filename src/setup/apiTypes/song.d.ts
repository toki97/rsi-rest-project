export interface AddSongVariables {
  title: string;
  authorName: string;
  publicationYear: number;
}

export interface ChangeListenedStatusVariables {
  songId: string;
  status: boolean;
}
