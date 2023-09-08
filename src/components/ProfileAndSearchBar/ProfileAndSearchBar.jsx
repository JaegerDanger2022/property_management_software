import {
  AccountCircle,
  NotificationAdd,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const ProfileAndSearchBar = () => {
  return (
    <div style={{ display: "flex", gap: ".7vw" }}>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        type="text"
        autoComplete="current-password"
        size="small"
        sx={{ backgroundColor: "#EFECFD" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <IconButton>
        {" "}
        <Notifications />
      </IconButton>

      <Avatar>J</Avatar>
    </div>
  );
};

export default ProfileAndSearchBar;
