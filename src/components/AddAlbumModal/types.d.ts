export interface AddAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AlbumFormData {
  title: string;
  authorName: string;
  publicationYear: number;
  songIds: string[];
}
