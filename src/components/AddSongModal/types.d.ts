export interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SongFormData {
  title: string;
  authorName: string;
  publicationYear: number;
}
