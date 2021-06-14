import { useCallback, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useSongsList } from "../../pages/SongsPage/hooks";
import AlbumsService from "../../services/albums";
import { AddAlbumVariables } from "../../services/albums/types";
import apiRoutes from "../../services/apiRoutes";
import { UpdateAlbumVariables } from "../../setup/apiTypes/album";
import { AlbumFormData } from "./types";

export const useAddAlbum = (close: () => void) => {
  const { refetch } = useQuery({
    queryKey: apiRoutes.ALBUMS,
    queryFn: AlbumsService.getAlbums,
  });
  const { mutateAsync: addAlbum } = useMutation<
    unknown,
    unknown,
    AddAlbumVariables
  >(apiRoutes.ADD_ALBUM, ({ album }) => AlbumsService.addAlbum(album));

  const handleAddAlbum = useCallback(
    async (formData: AlbumFormData) => {
      await addAlbum({
        album: {
          ...formData,
        },
      });
      close();

      refetch();
    },
    [addAlbum, close, refetch]
  );

  return handleAddAlbum;
};

export const useUpdateAlbum = (
  albumId: string,
  close: () => void,
  refetch: () => void
) => {
  const { mutateAsync: updateAlbum } = useMutation<
    unknown,
    unknown,
    UpdateAlbumVariables
  >(apiRoutes.UPDATE_ALBUM, (variables) =>
    AlbumsService.updateAlbum(variables)
  );

  const handleUpdateAlbum = useCallback(
    async (formData: AlbumFormData) => {
      await updateAlbum({
        id: albumId,
        ...formData,
      });
      close();

      refetch();
    },
    [updateAlbum, close, refetch, albumId]
  );

  return handleUpdateAlbum;
};

export const useSongsListData = () => {
  const { songs } = useSongsList();

  return useMemo(
    () =>
      songs.map(({ title, id }) => ({
        name: title,
        value: id,
      })),
    [songs]
  );
};
