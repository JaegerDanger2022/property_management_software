import { Button, useTheme } from "@mui/material";
import React from "react";

export const ActionButton = ({ label, startIcon, endIcon, handleAction }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={handleAction}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ background: theme.palette.primary.button }}
    >
      {label}
    </Button>
  );
};