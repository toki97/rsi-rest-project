import Container from "@material-ui/core/Container";
import SongsList from "../../components/SongsList";
import { useUserSongsList } from "./hooks";

const UserSongsPage = () => {
  const songs = useUserSongsList();

  return (
    <Container>
      <SongsList songs={songs} areUsersSongs />
    </Container>
  );
};

export default UserSongsPage;
