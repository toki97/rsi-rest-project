import Container from "@material-ui/core/Container";
import SongsList from "../../components/SongsList";
import { useUserSongsList } from "./hooks";

const UserSongsPage = () => {
  const { songs, refetch } = useUserSongsList();

  return (
    <Container>
      <SongsList songs={songs} refetch={refetch} areUsersSongs />
    </Container>
  );
};

export default UserSongsPage;
