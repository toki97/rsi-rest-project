import Container from "@material-ui/core/Container";
import React from "react";
import SongsList from "../../components/SongsList";
import { useSongsList } from "./hooks";

const SongsPage: React.FC = () => {
  const { songs, refetch } = useSongsList();

  return (
    <Container>
      <SongsList songs={songs} refetch={refetch} />
    </Container>
  );
};

export default SongsPage;
