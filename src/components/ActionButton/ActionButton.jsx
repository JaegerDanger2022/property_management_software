import { Button, useTheme } from "@mui/material";
import React from "react";

function ActionButton({
  label,
  startIcon,
  endIcon,
  handleAction,
  type,
  width,
  sx,
}) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={handleAction}
      startIcon={startIcon}
      type={type}
      endIcon={endIcon}
      sx={{
        background: theme.palette.primary.button,
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}

export default ActionButton;
