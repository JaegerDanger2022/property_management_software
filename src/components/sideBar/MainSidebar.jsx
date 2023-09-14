import { Box, Button, Card, IconButton, Paper } from "@mui/material";
import React from "react";
import { SidebarButton } from "./Buttons/SidebarButton";
import { Add, Dashboard, Menu } from "@mui/icons-material";
import Rentals from "./Categories/Rentals/Rentals";
import Leases from "./Categories/Leases/Leases";
import Accounting from "./Categories/Accounting/Accounting";
import People from "./Categories/People/People";
import Tasks from "./Categories/Tasks/Tasks";
import Communications from "./Categories/Communication/Communication";
import Reports from "./Categories/Reports/Reports";
import Settings from "./Categories/Settings/Settings";
// images
import Logo from "../../assets/images/whitehall-logo.png";
const MainSidebar = () => {
  return (
    <div>
      <Paper
        sx={{
          // width: "18%",
          height: "90dvh",
          borderRadius: "2dvw",

          padding: "4dvh 1dvw 2dvh 1dvw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "2vh",
          }}
        >
          {" "}
          <div style={{ flex: "0.9" }}>
            {" "}
            <img src={Logo} style={{ width: "13vw" }} />
          </div>{" "}
          <div>
            <IconButton>
              {" "}
              <Menu />{" "}
            </IconButton>
          </div>
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
            marginBottom: "2vh",
          }}
        >
          <SidebarButton label="Create New" startIcon={<Add />} />
          <SidebarButton label="Dashboard" startIcon={<Dashboard />} />
        </Box>
        <Box
          sx={{
            overflowY: "scroll",
            maxHeight: "70%",
            borderRadius: "4px",
            scrollbarGutter: "stable",
            "& .scrollbar": {
              scrollbarWidth: "thin",
              scrollbarColor: "#f3f0eb #f3f0eb",
              "&::-webkit-scrollbar": {
                width: "2px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "blue",
              },
            },
          }}
        >
          <Rentals />
          <Leases />
          <People />
          <Tasks />
          <Accounting />
          <Communications />
          <Reports />
          <Settings />
        </Box>
      </Paper>
    </div>
  );
};

export default MainSidebar;
