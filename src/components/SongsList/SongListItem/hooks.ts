import { useState, useCallback } from "react";
import { useMutation } from "react-query";
import apiRoutes from "../../../services/apiRoutes";
import SongsService from "../../../services/songs";
import {
  AddUserSongVariables,
  GetSongsResponseSingleItem,
  RateSongVariables,
  RemoveSongVariables,
} from "../../../services/songs/types";

export const useSongListenedStatus = (listened: boolean) => {
  const { mutate: changeListenedStatus } = useMutation(
    SongsService.changeListenedStatus
  );
  const [isListened, setIsListened] = useState(listened);

  const handleListenedChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const { checked } = event.target;
        changeListenedStatus();
        setIsListened(checked);
      },
      [changeListenedStatus]
    );

  return [isListened, handleListenedChange] as const;
};

export const useSongRating = (songId: string) => {
  const { mutate: rateSong } = useMutation<unknown, unknown, RateSongVariables>(
    SongsService.changeListenedStatus
  );
  const [userRating, setUserRating] = useState<number | string>("");

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

export const useRemoveSong = (songId: string) => {
  const { mutate: removeSong } = useMutation<
    unknown,
    unknown,
    RemoveSongVariables
  >(apiRoutes.REMOVE_SONG(songId), (variables) =>
    SongsService.removeSong(variables.songId)
  );

  return useCallback(() => {
    removeSong({
      songId,
    });
  }, [removeSong, songId]);
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

export const useUpdateSong = (song: GetSongsResponseSingleItem) => {};
