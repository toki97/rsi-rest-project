import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { AlbumListItemProps } from "./types";
import useStyles from "./styles";

const AlbumListItem: React.FC<AlbumListItemProps> = ({
  song: { id, title, authorName, publicationYear, rate, songs },
  isUserAlbum,
  ...rest
}) => {
  const classes = useStyles(rest);

  return (
    <Box className={classes.item} component="li">
      <Box className={classes.info}>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>

        <Typography variant="body1">
          {authorName} - {publicationYear}
        </Typography>

        {!isUserAlbum && (
          <Typography className={classes.songRating} variant="body1">
            Rating - {rate}
          </Typography>
        )}
      </Box>

      <Box className={classes.actions}>
        {!isUserAlbum && (
          <Box className={classes.ratingWrapper}>
            <FormControl>
              <InputLabel id="rating-select">Rate</InputLabel>
              <Select
                className={classes.ratingSelect}
                labelId="rating-select"
                // value={userRating}
                // onChange={handleRateSong}
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

        <Box>
          {!isUserAlbum && (
            <IconButton onClick={undefined}>
              <FavoriteBorderIcon />
            </IconButton>
          )}

          {!isUserAlbum && (
            <IconButton>
              <EditIcon />
            </IconButton>
          )}

          {isUserAlbum && (
            <IconButton onClick={undefined}>
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AlbumListItem;
