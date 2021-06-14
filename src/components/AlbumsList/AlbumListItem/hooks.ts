import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import AlbumsService from "../../../services/albums";
import {
  AddUserAlbumVariables,
  RateAlbumVariables,
  RemoveFromUserAlbumsVariables,
} from "../../../services/albums/types";
import apiRoutes from "../../../services/apiRoutes";

export const useAlbumRating = (
  albumId: string,
  rate: number,
  refetch: () => void
) => {
  const { mutate: rateAlbum } = useMutation<
    unknown,
    unknown,
    RateAlbumVariables
  >(({ albumId, rating }) => AlbumsService.rateAlbum(albumId, rating));
  const [userRating, setUserRating] = useState<number | string>(rate);

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
      refetch();

      setUserRating(rating);
    },
    [rateAlbum, albumId, refetch]
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

export const useRemoveFromUserAlbums = (
  albumId: string,
  refetch: () => void
) => {
  const { mutateAsync: removeAlbum } = useMutation<
    unknown,
    unknown,
    RemoveFromUserAlbumsVariables
  >(apiRoutes.REMOVE_USER_ALBUM(albumId), (variables) =>
    AlbumsService.removeFromUsersAlbums(variables.albumId)
  );

  return useCallback(async () => {
    await removeAlbum({
      albumId,
    });
    refetch();
  }, [removeAlbum, albumId, refetch]);
};

export const useRemoveAlbum = (albumId: string, refetch: () => void) => {
  const { mutateAsync: removeAlbum } = useMutation<
    unknown,
    unknown,
    RemoveFromUserAlbumsVariables
  >(apiRoutes.REMOVE_ALBUM(albumId), (variables) =>
    AlbumsService.removeAlbum(variables.albumId)
  );

  return useCallback(async () => {
    await removeAlbum({
      albumId,
    });
    refetch();
  }, [removeAlbum, albumId, refetch]);
};
