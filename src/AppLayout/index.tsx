import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import AddSongModal from "../components/AddSongModal";

const AppLayout: React.FC = ({ children }) => {
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setAddSongModalOpen(true)}>
            <AddIcon />
          </IconButton>
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
