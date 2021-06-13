import Grid from "@material-ui/core/Grid";
import React from "react";
import SongListItem from "./SongListItem";
import useStyles from "./styles";
import { SongsListProps } from "./types";

const SongsList: React.FC<SongsListProps> = ({
  songs,
  areUsersSongs = false,
  ...rest
}) => {
  const classes = useStyles(rest);

  return (
    <Grid className={classes.list} component="ul">
      {songs.map((song) => (
        <SongListItem key={song.id} song={song} isUserSong={areUsersSongs} />
      ))}
    </Grid>
  );
};

export default SongsList;
