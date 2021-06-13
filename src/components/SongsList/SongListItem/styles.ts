import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid black",
    padding: "1rem 1.5rem",
  },
  title: {
    marginBottom: "1rem",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ratingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  rating: {
    whiteSpace: "nowrap",
    marginLeft: "2rem",
    marginTop: "1rem",
    minWidth: "100px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "right",
  },
  ratingSelect: {
    width: "100px",
  },
});

export default useStyles;
