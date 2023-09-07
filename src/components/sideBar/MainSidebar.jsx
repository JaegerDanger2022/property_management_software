import { Box, Button, Card, Paper } from "@mui/material";
import React from "react";
import { SidebarButton } from "./Buttons/SidebarButton";
import { Add } from "@mui/icons-material";
import Rentals from "./Categories/Rentals/Rentals";
import Leases from "./Categories/Leases/Leases";
import Accounting from "./Categories/Accounting/Accounting";
import People from "./Categories/People/People";
import Tasks from "./Categories/Tasks/Tasks";
import Communications from "./Categories/Communication/Communication";
import Reports from "./Categories/Reports/Reports";
import Settings from "./Categories/Settings/Settings";

const MainSidebar = () => {
  return (
    <div>
      <Paper
        sx={{
          width: "15%",
          height: "90dvh",
          borderRadius: "2dvw",

          padding: "4dvh 1dvw 2dvh 1dvw",
        }}
      >
        <Box>Logo</Box>{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
          }}
        >
          <SidebarButton label="Create New" startIcon={<Add />} />
          <SidebarButton label="Dashboard" startIcon={<Add />} />
        </Box>
        <Box
          sx={{ overflowY: "scroll", maxHeight: "80%", borderRadius: "4px" }}
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
