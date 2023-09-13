import { Cancel } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

function PaymentRecieveRow({
  amountReceived,
  tenantName,
  recentTenantDate,
  recentTenantIcon,
  address,
}) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          sx={{ background: "black", color: "#FEECEC" }}
        >
          {tenantName}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div>
            {/* THIS IS RECENT TENANT NAME OR HOUSE ADDRESS */}
            {address}
            {/* END OF RECENT TENANT NAME OR HOUSE ADDRESS */}
            <span
              style={{
                float: "right",
                display: "flex",
                alignItems: "center",
                color: "red",
              }}
            >
              {/* END OF RECENT TENANT NAME OR HOUSE ADDRESS */}

              {/* THIS IS RECENT TENANT MONEY NOTE ICON */}
              <div>
                <IconButton sx={{ color: "red" }}>
                  {recentTenantIcon}
                </IconButton>
              </div>
              {/* END OF RECENT TENANT MONEY NOTE ICON */}

              {/* THIS IS RECENT PAYMENT RECEIVED AMOUNT NOTE */}
              <div style={{ color: "#CD9050" }}>{amountReceived}</div>
              {/* END OF RECENT PAYMENT RECEIVED AMOUNT  NOTE*/}
            </span>
          </div>
        }
        // THIS IS RECENT PAYMENT RECEIVED DATE
        secondary={recentTenantDate}
        sx={{ color: "green" }}
        // END OF RECENT PAYMENT RECEIVED DATE
      />
    </ListItem>
  );
}

export default PaymentRecieveRow;
