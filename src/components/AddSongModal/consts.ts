import { SongFormData } from "./types";

export const initialValues: SongFormData = {
  title: "",
  authorName: "",
  publicationYear: new Date().getFullYear(),
};
