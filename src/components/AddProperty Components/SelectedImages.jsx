import { Card, CardMedia } from "@mui/material";
import React from "react";

export const SelectedImages = ({ item }) => {
  return (
    <Card sx={{ height: "20vh", width: "10vw", zIndex: 9 }}>
      <CardMedia
        component="img"
        image={item}
        sx={{ height: "20vh", width: "10vw" }}
      />
    </Card>
  );
};
