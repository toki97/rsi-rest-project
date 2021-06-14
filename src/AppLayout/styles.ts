import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    linksWrapper: {
      "& > * + *": {
        marginLeft: "2rem",
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
