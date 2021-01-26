import Link from "react-router-dom/Link";

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
  },
  color: "#2e343acc",
});

const MyButton = ({ children, classes, page }) => {
  return (
    <Button
      variant='contained'
      color='inherited'
      size='large'
      className={classes.default}
      component={Link}
      to={page}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(MyButton);
