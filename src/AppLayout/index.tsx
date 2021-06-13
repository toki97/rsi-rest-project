import { Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import AddSongModal from "../components/AddSongModal";
import routes from "../setup/routes";
import useStyles from "./styles";

const AppLayout: React.FC = ({ children, ...rest }) => {
  const classes = useStyles(rest);
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const { pathname } = useLocation();
  const isSongsPage = matchPath(routes.HOME, {
    path: pathname,
  });

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          {isSongsPage && (
            <IconButton onClick={() => setAddSongModalOpen(true)}>
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
        </Toolbar>
      </AppBar>

      {children}

      <AddSongModal
        isOpen={addSongModalOpen}
        onClose={() => setAddSongModalOpen(false)}
      />
    </Container>
  );
};

export default AppLayout;
