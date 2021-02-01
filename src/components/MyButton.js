import { Link } from "react-router-dom";
import clsx from "clsx";

//MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  default: {
    "&:hover": {
      backgroundColor: "#2d3238",
      color: "white",
    },
    margin: "0 .5rem 0 .5rem",
    fontFamily: "Monserrat, sans-serif",
    fontWeight: "525",
  },
});

const MyButton = ({ children, classes, page, customClass, onClickEvent }) => {
  return (
    <Button
      variant='contained'
      size='large'
      className={clsx(classes.default, customClass)}
      component={Link}
      to={page}
      onClick={onClickEvent}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(MyButton);
