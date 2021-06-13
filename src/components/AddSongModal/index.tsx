import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";
import React from "react";
import { initialValues } from "./consts";
import { useAddSong } from "./hooks";
import { AddSongModalProps, SongFormData } from "./types";

const AddSongModal: React.FC<AddSongModalProps> = ({ isOpen, onClose }) => {
  const handleSongAdd = useAddSong(onClose);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Formik<SongFormData>
        initialValues={initialValues}
        onSubmit={handleSongAdd}
      >
        <Form>
          <DialogTitle>Add a song</DialogTitle>

          <DialogContent>
            <Field
              as={TextField}
              autoFocus
              margin="dense"
              name="title"
              label="Title"
              fullWidth
            />

            <Field
              as={TextField}
              autoFocus
              margin="dense"
              name="authorName"
              label="Author"
              fullWidth
            />

            <Field
              as={TextField}
              autoFocus
              margin="dense"
              name="publicationYear"
              label="Publication year"
              type="number"
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>

            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default AddSongModal;
