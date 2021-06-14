import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import apiRoutes from "../../services/apiRoutes";
import SongsService from "../../services/songs";
import {
  AddSongVariables,
  UpdateSongVariables,
} from "../../setup/apiTypes/song";

export const useAddSong = (close: () => void) => {
  const { refetch } = useQuery({
    queryKey: apiRoutes.SONGS,
    queryFn: SongsService.getSongs,
  });
  const { mutateAsync: addSong } = useMutation<
    unknown,
    unknown,
    AddSongVariables
  >(apiRoutes.ADD_SONG, (variables) => SongsService.addSong(variables));

  const handleAddSong = useCallback(
    async (formData: AddSongVariables) => {
      await addSong(formData);
      refetch();
      close();
    },
    [addSong, close, refetch]
  );

  return handleAddSong;
};

export const useUpdateSong = (
  songId: string,
  close: () => void,
  refetch: () => void
) => {
  const { mutateAsync: updateSong } = useMutation<
    unknown,
    unknown,
    UpdateSongVariables
  >(apiRoutes.UPDATE_SONG, (variables) => SongsService.updateSong(variables));

  const handleUpdateSong = useCallback(
    async (formData: AddSongVariables) => {
      await updateSong({
        ...formData,
        id: songId,
      });
      refetch();
      close();
    },
    [updateSong, close, refetch, songId]
  );

  return handleUpdateSong;
};
