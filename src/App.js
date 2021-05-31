import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import TopBar from "./components/TopBar";

const theme = createMuiTheme({
  typography: {
    // fontFamily: ["Fira Sans Condensed", "sans-serif"].join(","),
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: "#ddd",
    h4: {
      fontSize: "1.8rem",
      fontWeight: 400,
      margin: "0 0 20px 0",
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
      {/* <ResponsiveDrawer /> */}
      {/* <ResponsiveMenu /> */}
      <TopBar />
    </ThemeProvider>
  );
}

export default App;
