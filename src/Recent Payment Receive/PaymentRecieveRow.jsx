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
        <Avatar>{tenantName}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            {/* THIS IS RECENT TENANT NAME OR HOUSE ADDRESS */}
            {address}
            {/* END OF RECENT TENANT NAME OR HOUSE ADDRESS */}
            <span
              style={{
                float: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* END OF RECENT TENANT NAME OR HOUSE ADDRESS */}

              {/* THIS IS RECENT TENANT MONEY NOTE ICON */}
              <div>
                <IconButton>{recentTenantIcon}</IconButton>
              </div>
              {/* END OF RECENT TENANT MONEY NOTE ICON */}

              {/* THIS IS RECENT PAYMENT RECEIVED AMOUNT NOTE */}
              <div>{amountReceived}</div>
              {/* END OF RECENT PAYMENT RECEIVED AMOUNT  NOTE*/}
            </span>
          </>
        }
        // THIS IS RECENT PAYMENT RECEIVED DATE
        secondary={recentTenantDate}
        // END OF RECENT PAYMENT RECEIVED DATE
      />
    </ListItem>
  );
}

export default PaymentRecieveRow;
