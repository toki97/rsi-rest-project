import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {
  useAddToUserSongs,
  useRemoveFromUsersSongs,
  useRemoveSong,
  useSongListenedStatus,
  useSongRating,
} from "./hooks";
import useStyles from "./styles";
import { SongListItemProps } from "./types";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

const SongListItem: React.FC<SongListItemProps> = ({
  song: { id, title, authorName, rate, publicationYear },
  refetch,
  isUserSong = false,
  albumView = false,
  ...rest
}) => {
  const classes = useStyles(rest);
  const [listened, handleListenedChange] = useSongListenedStatus(id, false);
  const [userRating, handleRateSong] = useSongRating(id);
  const removeSong = useRemoveSong(id, refetch);
  const removeFromUserSongs = useRemoveFromUsersSongs(id, refetch);
  const addToUserSongs = useAddToUserSongs(id);

  return (
    <Box className={classes.item} component="li">
      <Box className={classes.info}>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>

        <Typography variant="body1">
          {authorName} - {publicationYear}
        </Typography>

        {!isUserSong && (
          <Typography className={classes.songRating} variant="body1">
            Rating - {rate}
          </Typography>
        )}
      </Box>

      <Box className={classes.actions}>
        {!isUserSong && (
          <Box className={classes.ratingWrapper}>
            <FormControl>
              <InputLabel id="rating-select">Rate</InputLabel>
              <Select
                className={classes.ratingSelect}
                labelId="rating-select"
                value={userRating}
                onChange={handleRateSong}
                fullWidth
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {isUserSong && (
          <FormControlLabel
            control={
              <Checkbox
                checked={listened}
                onChange={handleListenedChange}
                name="listened"
                color="primary"
              />
            }
            label="Listened"
          />
        )}

        <Box>
          {!isUserSong && (
            <IconButton onClick={addToUserSongs}>
              <FavoriteBorderIcon />
            </IconButton>
          )}

          {!isUserSong && (
            <IconButton>
              <EditIcon />
            </IconButton>
          )}

          {isUserSong && (
            <IconButton onClick={removeFromUserSongs}>
              <FavoriteIcon />
            </IconButton>
          )}

          {!isUserSong && (
            <IconButton onClick={removeSong}>
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SongListItem;
