export interface AddSongModalProps {
  isOpen: boolean;
  song?: SongFormData & {
    id: string;
  };
  onClose: () => void;
  refetch?: () => void;
  isEditing?: boolean;
}

export interface SongFormData {
  title: string;
  authorName: string;
  publicationYear: number;
}
