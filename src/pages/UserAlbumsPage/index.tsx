import AlbumsList from "../../components/AlbumsList";
import { useUserAlbumsList } from "./hooks";

const UserAlbumsPage = () => {
  const { albums, refetch } = useUserAlbumsList();

  return <AlbumsList albums={albums} refetch={refetch} areUsersAlbums />;
};

export default UserAlbumsPage;
