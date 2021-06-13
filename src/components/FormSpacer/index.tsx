import React from "react";
import useStyles from "./styles";

const FormSpacer: React.FC = (props) => {
  const classes = useStyles(props);

  return <div className={classes.spacer} />;
};

export default FormSpacer;
