import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import TopBar from "./components/TopBar";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: "#464141",
    },
    // fontFamily: ["Fira Sans Condensed", "sans-serif"].join(","),
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      margin: "0 0 20px 0",
      textAlign: "center",
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      // main: "#40739e",
      main: "#EE6741",
    },
    secondary: {
      main: "#ff6b6b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  );
}

export default App;
