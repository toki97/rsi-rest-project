import React from "react";
import AlbumsList from "../../components/AlbumsList";
import { useAlbumsList } from "./hooks";

const AlbumsPage = () => {
  const albums = useAlbumsList();

  return <AlbumsList albums={albums} />;
};

export default AlbumsPage;
