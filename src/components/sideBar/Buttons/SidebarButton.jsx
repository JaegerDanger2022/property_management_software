import { Button, useTheme } from "@mui/material";
import React from "react";

export const SidebarButton = ({ label, startIcon, endIcon }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ background: theme.palette.primary.button }}
    >
      {label}
    </Button>
  );
};
