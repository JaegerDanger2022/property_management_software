import React from "react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Tab, Tabs } from "@mui/material";

function Navbar({
  overview,
  units,
  leases,
  tenants,
  rentalApplication,
  signatureRequests,
  Tasks,
  Notes,
  files,
}) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      sx={{
        m: "1",
        maxWidth: "1000px",
        backgroundColor: "#F3F0EB",
        color: "black",
      }}
      value={value}
      onChange={handleChange}
    >
      <Tab
        label={overview}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={units}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={leases}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={tenants}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={rentalApplication}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={signatureRequests}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={Tasks}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={Notes}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
      <Tab
        label={files}
        sx={{
          fontSize: "12px",
          fontWeight: "600",
        }}
      />
    </Tabs>
  );
}

export default Navbar;
