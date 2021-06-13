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
import { useRemoveSong, useSongListenedStatus, useSongRating } from "./hooks";
import useStyles from "./styles";
import { SongListItemProps } from "./types";

const SongListItem: React.FC<SongListItemProps> = ({
  song: { id, title, authorName, rate, publicationYear },
  ...rest
}) => {
  const classes = useStyles(rest);
  const [listened, handleListenedChange] = useSongListenedStatus(false);
  const [userRating, handleRateSong] = useSongRating(id);
  const removeSong = useRemoveSong(id);

  return (
    <Box className={classes.item} component="li">
      <Box className={classes.info}>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>

        <Typography variant="body1">
          {authorName} - {publicationYear}
        </Typography>
      </Box>

      <Box className={classes.actions}>
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

          <Box>
            <Typography className={classes.rating} variant="body1">
              Rating - {rate}
            </Typography>
          </Box>
        </Box>

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
      </Box>
    </Box>
  );
};

export default SongListItem;
