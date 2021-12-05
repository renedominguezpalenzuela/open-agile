import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#e42078",
    },
     myColor: {
       main: "#e42078",
       
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: "3rem",
  //       },
  //     },
  //   },
  //   MuiInput: {
  //      styleOverrides: {
  //       root: {
  //         // fontSize: "3rem",
  //         color:"#ffffff",
  //       },
  //     },
  //   },    
  // },
});

export default theme;
