import Grid from "@material-ui/core/Grid";
import React from "react";
import SongListItem from "./SongListItem";
import useStyles from "./styles";
import { SongsListProps } from "./types";
import classNames from "classnames";

const SongsList: React.FC<SongsListProps> = ({
  songs,
  areUsersSongs = false,
  albumView = false,
  ...rest
}) => {
  const classes = useStyles(rest);

  return (
    <Grid
      className={classNames(classes.list, {
        [classes.albumView]: albumView,
      })}
      component="ul"
    >
      {songs.map((song) => (
        <SongListItem
          key={song.id}
          song={song}
          isUserSong={areUsersSongs}
          albumView={albumView}
        />
      ))}
    </Grid>
  );
};

export default SongsList;
