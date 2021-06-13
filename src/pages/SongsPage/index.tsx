import Container from "@material-ui/core/Container";
import React from "react";
import SongsList from "../../components/SongsList";
import { useSongsList } from "./hooks";

const SongsPage: React.FC = () => {
  const songs = useSongsList();

  return (
    <Container>
      <SongsList songs={songs} />
    </Container>
  );
};

export default SongsPage;
