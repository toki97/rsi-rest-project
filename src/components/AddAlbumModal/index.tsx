import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";
import React from "react";
import { initialValues } from "./consts";
import { useAddAlbum, useSongsListData } from "./hooks";
import useStyles from "./styles";
import { AddAlbumModalProps, AlbumFormData } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddAlbumModal: React.FC<AddAlbumModalProps> = ({
  isOpen,
  onClose,
  ...rest
}) => {
  const classes = useStyles(rest);
  const songsListData = useSongsListData();
  const handleAlbumAdd = useAddAlbum(onClose);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Formik<AlbumFormData>
        initialValues={initialValues}
        onSubmit={handleAlbumAdd}
      >
        <Form>
          <DialogTitle>Add an album</DialogTitle>

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

            <FormControl className={classes.formControl}>
              <InputLabel id="songs">Name</InputLabel>
              <Field
                as={Select}
                labelId="songs"
                name="songIds"
                input={<Input />}
                MenuProps={MenuProps}
                renderValue={(selected: string[]) => (
                  <div className={classes.chips}>
                    {(selected as string[]).map((value) => (
                      <Chip
                        key={value}
                        label={
                          songsListData.find((item) => item.value === value)
                            ?.name ?? ""
                        }
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                fullWidth
                multiple
              >
                {songsListData.map(({ name, value }) => (
                  <MenuItem key={value} value={value}>
                    {name}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
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

export default AddAlbumModal;
