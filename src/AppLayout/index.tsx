import { Link, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import AddSongModal from "../components/AddSongModal";
import routes from "../setup/routes";
import useStyles from "./styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  useIsLoggedIn,
  useLogout,
  useSearchQuery,
  useSortByRatingQuery,
} from "./hooks";
import Button from "@material-ui/core/Button";
import AddAlbumModal from "../components/AddAlbumModal";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const AppLayout: React.FC = ({ children, ...rest }) => {
  const classes = useStyles(rest);
  const history = useHistory();
  const logout = useLogout();
  const isLoggedIn = useIsLoggedIn();
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const [addAlbumModalOpen, setAddAlbumModalOpen] = useState(false);
  const { pathname } = useLocation();
  const isSongsPage = matchPath(routes.HOME, {
    path: pathname,
    exact: true,
  });
  const isAlbumsPage = matchPath(routes.ALBUMS, {
    path: pathname,
    exact: true,
  });

  const { search, handleSearchChange } = useSearchQuery();
  const [sortByRating, handleSortByRatingChange] = useSortByRatingQuery();

  return (
    <Container>
      {isLoggedIn && (
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            {(isSongsPage || isAlbumsPage) && (
              <IconButton
                onClick={() =>
                  isAlbumsPage
                    ? setAddAlbumModalOpen(true)
                    : setAddSongModalOpen(true)
                }
              >
                <AddIcon />
              </IconButton>
            )}

            <Box className={classes.linksWrapper}>
              <Link color="secondary" variant="h6" href={routes.HOME}>
                Songs
              </Link>

              <Link color="secondary" variant="h6" href={routes.ALBUMS}>
                Albums
              </Link>

              <Link color="secondary" variant="h6" href={routes.USER_SONGS}>
                User songs
              </Link>

              <Link color="secondary" variant="h6" href={routes.USER_ALBUMS}>
                User albums
              </Link>
            </Box>

            {isSongsPage && (
              <TextField
                placeholder="Search..."
                value={search ?? ""}
                onChange={handleSearchChange}
              />
            )}

            {isSongsPage && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sortByRating}
                    onChange={handleSortByRatingChange}
                    color="secondary"
                  />
                }
                label="Sort by rating"
              />
            )}

            {isLoggedIn ? (
              <IconButton onClick={logout}>
                <ExitToAppIcon />
              </IconButton>
            ) : (
              <Button onClick={() => history.push(routes.LOGIN)}>Login</Button>
            )}
          </Toolbar>
        </AppBar>
      )}

      {children}

      <AddSongModal
        isOpen={addSongModalOpen}
        onClose={() => setAddSongModalOpen(false)}
      />

      <AddAlbumModal
        isOpen={addAlbumModalOpen}
        onClose={() => setAddAlbumModalOpen(false)}
      />
    </Container>
  );
};

export default AppLayout;
