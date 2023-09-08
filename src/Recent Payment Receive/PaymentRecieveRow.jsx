import { Cancel } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

function PaymentRecieveRow({ amountReceived, tenantName }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{tenantName}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            Work
            <span
              style={{
                float: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <IconButton>
                  {" "}
                  <Cancel />{" "}
                </IconButton>
              </div>
              <div>{amountReceived}</div>
            </span>
          </>
        }
        secondary="Jan 7, 2014"
      />
    </ListItem>
  );
}

export default PaymentRecieveRow;
