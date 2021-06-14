import { useState, useCallback } from "react";
import { useMutation } from "react-query";
import apiRoutes from "../../../services/apiRoutes";
import SongsService from "../../../services/songs";
import {
  AddUserSongVariables,
  RateSongVariables,
  RemoveSongVariables,
} from "../../../services/songs/types";
import { ChangeListenedStatusVariables } from "../../../setup/apiTypes/song";

export const useSongListenedStatus = (songId: string, listened: boolean) => {
  const { mutate: changeListenedStatus } = useMutation<
    boolean,
    unknown,
    ChangeListenedStatusVariables
  >((variables) => SongsService.changeListenedStatus(variables.songId));
  const [isListened, setIsListened] = useState(listened);

  const handleListenedChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const { checked } = event.target;
        changeListenedStatus({
          songId,
        });
        setIsListened(checked);
      },
      [changeListenedStatus, songId]
    );

  return [isListened, handleListenedChange] as const;
};

export const useSongRating = (songId: string, rate: number) => {
  const { mutate: rateSong } = useMutation<unknown, unknown, RateSongVariables>(
    ({ songId, rating }) => SongsService.rateSong(songId, rating)
  );
  const [userRating, setUserRating] = useState<number | string>(rate);

  const handleRateSong: React.ChangeEventHandler<{
    value: unknown;
  }> = useCallback(
    (event) => {
      const { value } = event.target;
      const rating =
        typeof value === "string" ? parseInt(value, 10) : (value as number);
      rateSong({
        songId,
        rating,
      });
      setUserRating(rating);
    },
    [rateSong, songId]
  );

  return [userRating, handleRateSong] as const;
};

export const useRemoveSong = (songId: string, refetch: () => void) => {
  const { mutateAsync: removeSong } = useMutation<
    unknown,
    unknown,
    RemoveSongVariables
  >(apiRoutes.REMOVE_SONG(songId), (variables) =>
    SongsService.removeSong(variables.songId)
  );

  return useCallback(async () => {
    await removeSong({
      songId,
    });

    refetch();
  }, [removeSong, songId, refetch]);
};

export const useRemoveFromUsersSongs = (
  songId: string,
  refetch: () => void
) => {
  const { mutateAsync: removeSong } = useMutation<
    unknown,
    unknown,
    RemoveSongVariables
  >(apiRoutes.REMOVE_FROM_USER_SONGS(songId), (variables) =>
    SongsService.removeFromUserSongs(variables.songId)
  );

  return useCallback(async () => {
    await removeSong({
      songId,
    });
    refetch();
  }, [removeSong, songId, refetch]);
};

export const useAddToUserSongs = (songId: string) => {
  const { mutate: addToUserSongs } = useMutation<
    unknown,
    unknown,
    AddUserSongVariables
  >(apiRoutes.ADD_USER_SONG(songId), (variables) =>
    SongsService.addUserSong(variables.songId)
  );

  return useCallback(() => {
    addToUserSongs({
      songId,
    });
  }, [addToUserSongs, songId]);
};
