import { Box, Button, Icon, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SideBarNavButtons = ({
  label,
  startIcon,
  endIcon,
  disabled,
  path,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        sx={{ fontSize: ".7em" }}
        onClick={() => {
          navigate(`${path}`);
        }}
        startIcon={startIcon}
        endIcon={endIcon}
        // disabled={disabled}
      >
        {label}
      </Button>{" "}
    </Box>
  );
};
