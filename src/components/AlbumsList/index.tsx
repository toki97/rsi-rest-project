import Grid from "@material-ui/core/Grid";
import React from "react";
import AlbumListItem from "./AlbumListItem";
import useStyles from "./styles";
import { AlbumsListProps } from "./types";

const AlbumsList: React.FC<AlbumsListProps> = ({
  albums,
  areUsersAlbums,
  ...rest
}) => {
  const classes = useStyles(rest);

  return (
    <Grid className={classes.list} component="ul">
      {albums.map((album) => (
        <AlbumListItem
          key={album.id}
          album={album}
          isUserAlbum={areUsersAlbums}
        />
      ))}
    </Grid>
  );
};

export default AlbumsList;
