
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
  palette: {
    primary: {
      main: "#512200",
      dark: "#421c00",
      light: "#512200ce",
    },
    secondary: {
      main: "#A6643D",
      dark: "#A6643D",
      light: "#f7e7cd",
    },
    // divider: blueGrey[700],
    // background: {
    //   default: grey[1000],
    //   paper: grey[900],
    // },
    text: {
      primary: "#512200",
      secondary:  "#512200ce",
    },
  },
  components: {
    MuiButton:{
      styleOverrides:{
        root:{
          "&.Mui-disabled":{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          // maxWidth:"250px",
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          // "&:-webkit-autofill": {
          //   WebkitTextFillColor: "#5122002",
          // },
          // "&:-internal-autofill-selected": {
          //   backgroundColor: "#fff !important",
          // },
          "&:focus":{
            outline: "none"
          },
          
        },
        root:{
          backgroundColor: "#fff !important",
          borderRadius:"4px",
          "&:before":{
            borderBottom: "none",
          }
        },
        notchedOutline:{
          borderColor: "white"
        }
      },
    },
  },
});
