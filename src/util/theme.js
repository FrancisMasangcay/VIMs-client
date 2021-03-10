export const themeFile = {
  palette: {
    primary: {
      main: "#3b4249cc",
    },
    secondary: {
      main: "#000000",
    },
  },
  spread: {
    root: {
      width: "100%",
      flexGrow: 1,
    },
    right: {
      flexGrow: 1,
    },
    register: {
      paddingTop: "1rem",
      fontSize: "1rem",
    },
    customError: {
      color: "red",
      fontSize: ".8rem",
    },
    form: {
      textAlign: "center",
    },
    textField: {
      margin: ".5rem auto .5rem auto",
      width: "66%",
    },
    inputForm: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #BACFE2 inset",
      },
    },
    image: {
      width: "30%",
      margin: "0",
    },
    fields: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      width: "fit-content",
      margin: "1rem auto 0 auto",
      "&:hover": {
        backgroundColor: "#2d3238",
        color: "white",
      },
      fontFamily: "Monserrat, sans-serif",
    },
    title: {
      margin: "0 auto 0 auto",
    },
    progress: {
      margin: "0 auto 0 auto",
    },
    link: {
      color: "black",
      textDecoration: "underline",
    },
    searchField: {
      marginRight: "1rem",
      marginLeft: "1rem",
      alignSelf: "center",
    },
  },
};
