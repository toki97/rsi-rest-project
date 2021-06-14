import { Link } from "@material-ui/core";
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
import { useIsLoggedIn, useLogout } from "./hooks";
import Button from "@material-ui/core/Button";
import AddAlbumModal from "../components/AddAlbumModal";

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
  });
  const isAlbumsPage = matchPath(routes.ALBUMS, {
    path: pathname,
  });

  return (
    <Container>
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
            <Link color="secondary" href={routes.HOME}>
              Songs
            </Link>

            <Link color="secondary" href={routes.ALBUMS}>
              Albums
            </Link>

            <Link color="secondary" href={routes.USER_SONGS}>
              User songs
            </Link>

            <Link color="secondary" href={routes.USER_ALBUMS}>
              User albums
            </Link>
          </Box>

          {isLoggedIn ? (
            <IconButton onClick={logout}>
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <Button onClick={() => history.push(routes.LOGIN)}>Login</Button>
          )}
        </Toolbar>
      </AppBar>

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
