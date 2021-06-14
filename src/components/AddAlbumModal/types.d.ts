import { Album } from "../../services/albums/types";

export interface AddAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  album?: Album & {
    id: string;
  };
  refetch?: () => void;
  isEditing?: boolean;
}

export interface AlbumFormData {
  title: string;
  authorName: string;
  publicationYear: number;
  songIds: string[];
}
