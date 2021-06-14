import { useCallback, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSongsList } from "../../pages/SongsPage/hooks";
import AlbumsService from "../../services/albums";
import { AddAlbumVariables } from "../../services/albums/types";
import apiRoutes from "../../services/apiRoutes";
import { AlbumFormData } from "./types";

export const useAddAlbum = (close: () => void) => {
  const queryClient = useQueryClient();
  const { mutate: addAlbum } = useMutation<unknown, unknown, AddAlbumVariables>(
    apiRoutes.ADD_ALBUM,
    ({ album }) => AlbumsService.addAlbum(album)
  );

  const handleAddAlbum = useCallback(
    (formData: AlbumFormData) => {
      addAlbum({
        album: {
          ...formData,
        },
      });
      close();

      // queryClient.invalidateQueries();
      // queryClient.clear();
      queryClient.refetchQueries([apiRoutes.ALBUMS], {
        exact: true,
        active: true,
      });
    },
    [addAlbum, close, queryClient]
  );

  return handleAddAlbum;
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
