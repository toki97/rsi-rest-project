import { useCallback } from "react";
import { useMutation } from "react-query";
import apiRoutes from "../../services/apiRoutes";
import SongsService from "../../services/songs";
import { AddSongVariables } from "../../setup/apiTypes/song";

const userId = "adsadasdsa";

export const useAddSong = (close: () => void) => {
  const { mutate: addSong } = useMutation<unknown, unknown, AddSongVariables>(
    apiRoutes.ADD_SONG,
    (variables) => SongsService.addSong(variables)
  );

  const handleAddSong = useCallback(
    (formData: AddSongVariables) => {
      addSong(formData);
      close();
    },
    [addSong, close]
  );

  return handleAddSong;
};
