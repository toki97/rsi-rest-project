import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import AlbumsService from "../../../services/albums";
import {
  AddUserAlbumVariables,
  RateAlbumVariables,
  RemoveFromUserAlbumsVariables,
} from "../../../services/albums/types";
import apiRoutes from "../../../services/apiRoutes";

export const useAlbumRating = (albumId: string) => {
  const { mutate: rateAlbum } = useMutation<
    unknown,
    unknown,
    RateAlbumVariables
  >(({ albumId, rating }) => AlbumsService.rateAlbum(albumId, rating));
  const [userRating, setUserRating] = useState<number | string>("");

  const handleRateAlbum: React.ChangeEventHandler<{
    value: unknown;
  }> = useCallback(
    (event) => {
      const { value } = event.target;
      const rating =
        typeof value === "string" ? parseInt(value, 10) : (value as number);
      rateAlbum({
        albumId,
        rating,
      });

      setUserRating(rating);
    },
    [rateAlbum, albumId]
  );

  return [userRating, handleRateAlbum] as const;
};

export const useAddToUserAlbums = (albumId: string) => {
  const { mutate: addToAlbumSongs } = useMutation<
    unknown,
    unknown,
    AddUserAlbumVariables
  >(apiRoutes.ADD_USER_ALBUM(albumId), (variables) =>
    AlbumsService.addToUserAlbums(variables.albumId)
  );

  return useCallback(() => {
    addToAlbumSongs({
      albumId,
    });
  }, [addToAlbumSongs, albumId]);
};

export const useRemoveFromUserAlbums = (albumId: string) => {
  const { mutate: removeAlbum } = useMutation<
    unknown,
    unknown,
    RemoveFromUserAlbumsVariables
  >(apiRoutes.REMOVE_USER_ALBUM(albumId), (variables) =>
    AlbumsService.removeFromUsersAlbums(variables.albumId)
  );

  return useCallback(() => {
    removeAlbum({
      albumId,
    });
  }, [removeAlbum, albumId]);
};