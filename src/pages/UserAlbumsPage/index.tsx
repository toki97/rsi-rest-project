import AlbumsList from "../../components/AlbumsList";
import { useUserAlbumsList } from "./hooks";

const UserAlbumsPage = () => {
  const albums = useUserAlbumsList();

  return <AlbumsList albums={albums} areUsersAlbums />;
};

export default UserAlbumsPage;
