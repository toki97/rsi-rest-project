import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    linksWrapper: {
      "& > * + *": {
        marginLeft: "2rem",
      },
    },
  })
);

export default useStyles;
