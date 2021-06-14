import React from "react";
import AlbumsList from "../../components/AlbumsList";
import { useAlbumsList } from "./hooks";

const AlbumsPage = () => {
  const { albums, refetch } = useAlbumsList();

  return <AlbumsList albums={albums} refetch={refetch} />;
};

export default AlbumsPage;
