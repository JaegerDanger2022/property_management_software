import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";
import { Avatar, IconButton } from "@mui/material";
import { MoreVert, Star } from "@mui/icons-material";

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({
  favorite,
  rightPrimary,
  leftPrimary,
}) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 965 }}>
      <Grid container spacing={0.0}>
        <Grid item xs={5} md={6}>
          <Typography sx={{ mt: 4, mb: 1 }} variant="h6">
            <div className="underline-text">{favorite}</div>
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end">
                      <Star />
                      <MoreVert />
                    </IconButton>
                  }
                >
                  <ListItemAvatar></ListItemAvatar>
                  <ListItemText primary={leftPrimary} />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={5} md={6}>
          <Typography sx={{ mt: 4, mb: 9 }} />
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end">
                      <Star />
                      <MoreVert />
                    </IconButton>
                  }
                >
                  <ListItemAvatar></ListItemAvatar>
                  <ListItemText primary={rightPrimary} />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
