import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// component import
import MainSidebar from "./components/sideBar/MainSidebar";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Dashboard from "./screens/Dashboard/Dashboard";
import ProfileAndSearchBar from "./components/ProfileAndSearchBar/ProfileAndSearchBar";
import Property from "./screens/Rentals/Property";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#F3F0EB",
    },
    primary: {
      main: "#0C0C0C",
      others: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },

    text: {
      primary: "rgba(0,0,0,0.82)",
      secondary: "rgba(0,0,0,0.67)",
      disabled: "rgba(0,0,0,0.82)",
      hint: "rgba(34,25,77,0.91)",
    },
    warning: {
      main: "rgba(237,108,2,0.93)",
      light: "rgba(240,137,52,0.91)",
      dark: "rgba(165,75,1,0.81)",
      contrastText: "rgba(255,255,255,0.91)",
    },
    info: {
      main: "rgba(2,136,209,0.96)",
      light: "rgba(52,159,218,0.91)",
      contrastText: "rgba(255,255,255,0.78)",
    },
    success: {
      main: "rgba(46,125,50,0.93)",
      light: "rgba(87,151,91,0.84)",
      dark: "rgba(32,87,35,0.77)",
    },
    divider: "rgba(0,0,0,0.11)",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: "0.25", maxWidth: "20%" }}>
            {" "}
            <MainSidebar />{" "}
          </div>

          <div className="RoutesContainer">
            <div className="Routes_ProfileAndSearchBar">
              <div style={{ float: "right" }}>
                {" "}
                <ProfileAndSearchBar />
              </div>
            </div>

            <div style={{ overflowY: "scroll" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="Unit" element={<Property />} />
                {/* <Route path="Draft Leases" element={<Dashboard />} /> */}
              </Routes>{" "}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
