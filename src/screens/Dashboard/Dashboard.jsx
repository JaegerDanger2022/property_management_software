import React from "react";
import "../../App.css";
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { Cancel, MoreVert, Recycling } from "@mui/icons-material";
import PaymentRecieveRow from "../../Recent Payment Receive/PaymentRecieveRow";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div>
        <h1 style={{ lineHeight: "1" }}>
          Property Dashboard <br />
          <span style={{ fontSize: ".5em", fontWeight: "400" }}>
            Welcome, Jeff
          </span>{" "}
        </h1>{" "}
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          sx={{
            backgroundColor: "#E3C9AE",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          {/* ==================================== */}
          <List sx={{ width: "100%", maxWidth: 752 }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Recent Payment Receive</div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <IconButton>
                  {" "}
                  <Recycling />{" "}
                </IconButton>
                <IconButton>
                  {" "}
                  <MoreVert />{" "}
                </IconButton>
              </div>
            </ListItem>
            <Divider />
            <PaymentRecieveRow amountReceived={"500,000"} tenantName={"jP"} />
            <PaymentRecieveRow amountReceived={"500,000"} tenantName={"jP"} />
          </List>
          {/* ==================================== */}
        </Card>
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          sx={{
            backgroundColor: "#E3C9AE",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            // padding: "1% 1%",
            // paddingLeft: "4%",
            // paddingRight: "4%",
          }}
        >
          Es
        </Card>
      </div>{" "}
      <div className="commonPadding">
        {" "}
        <Card
          sx={{
            backgroundColor: "#FEECEC",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          rq
        </Card>
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          sx={{
            backgroundColor: "#EFECFD",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          pa
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
