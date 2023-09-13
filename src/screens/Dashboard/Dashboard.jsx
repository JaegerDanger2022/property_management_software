import React from "react";
import "../../App.css";
import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  Assignment,
  AttachMoney,
  Cancel,
  CurrencyBitcoin,
  Hail,
  Money,
  MoreVert,
  Recycling,
} from "@mui/icons-material";
import PaymentRecieveRow from "../../Recent Payment Receive/PaymentRecieveRow";
import image from "../../assets/images/jp.jpg";

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
      {/* THIS CONTAIN RECENT PAYMENT RECEIVED HISTORY */}
      <div className="commonPadding">
        {" "}
        <Card
          className="Leases"
          sx={{
            backgroundColor: "#E3C9AE",
            color: "black",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            fontWeight: "600",
          }}
        >
          {/* ================================ */}
          <div>
            {/* =========================== */}
            <div className="leasesOutstandingBalnce">
              <div>Recent Payment Received</div>
              <div>
                <IconButton>
                  <Recycling />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>{" "}
              </div>
            </div>
            <Divider sx={{ background: "white" }} />
            {/* =========================== */}
          </div>

          <div>
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Money />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
          </div>
          {/* =================================== */}
        </Card>
      </div>
      {/* END OF RECENT PAYMENT RECEIVED HISTORY */}
      {/* THIS IS TOP VIEW PROPPERTY HISTORY */}
      <div className="commonPadding">
        {" "}
        <Card
          className="image"
          sx={{
            backgroundColor: "#E3C9AE",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          {/* TOP VIEWED PROPERTY -> IMAGE DISPLAY*/}
          <div>
            <Card
              sx={{
                borderRadius: "1px",
                width: "100%",
                // height: "2vh",
                padding: "75px 23px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            ></Card>
          </div>
          {/*  END TOP VIEWED PROPERTY -> IMAGE DISPLAY*/}

          {/* TOP VIEWED PROPERTY -> AMAZON */}
          <div style={{ background: "#C3AE97" }}>
            <small style={{ color: "black" }}>
              {" "}
              Amazon Echo Plus (3nd Gen) <br /> -Premium Quality{" "}
            </small>
            <div>
              {" "}
              <small
                className="askingPrice"
                style={{ background: "black", color: "red" }}
              >
                $45.00K-$55.00K{" "}
                <span style={{ padding: "0 25px", color: "wheat" }}>
                  Asking Price
                </span>{" "}
              </small>{" "}
            </div>
          </div>
          {/* END OF TOP VIEWED PROPERTY -> AMAZON */}

          {/* TOP VIEWED PROPERTY HEADLINE */}
          <div
            style={{
              color: "white",
              background: "black",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Top viewed Properties
          </div>
          {/* END OF TOP VIEWED PROPERTY HEADLINE */}
        </Card>
      </div>{" "}
      {/* END OF TOP VIED PROPERTY */}
      <div className="commonPadding">
        {" "}
        <Card
          className="Leases"
          sx={{
            backgroundColor: "#E3C9AE",
            color: "black",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            fontWeight: "600",
          }}
        >
          {/* ================================ */}
          <div>
            {/* =========================== */}
            <div className="leasesOutstandingBalnce">
              <div>Leases Balance</div>
              <div>
                <IconButton>
                  <Recycling />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>{" "}
              </div>
            </div>
            <Divider sx={{ background: "white" }} />
            {/* =========================== */}
          </div>

          <div>
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Money />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
          </div>
          {/* =================================== */}
        </Card>
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          className="totalRevenue "
          sx={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            color: "wheat",
          }}
        >
          <div style={{ background: "#C3AE97" }}>
            <div style={{ color: "black", fontSize: "19px" }}>Total Sales</div>
            <div>
              {" "}
              <small style={{ color: "green" }}>Oct 26/ 23-Nov</small>{" "}
            </div>
          </div>
          <div>
            <div style={{ background: "#E3C9AE", height: "18vh" }}>
              <div style={{ color: "black", fontSize: "20px" }}>Share</div>
              <div>
                {" "}
                <small style={{ color: "red" }}>$2,453.80</small>{" "}
              </div>
              <div>
                <small style={{ fontSize: "9.5px", color: "black" }}>
                  -8.5% year over year
                </small>
              </div>
            </div>
          </div>
          <div className="flexBTN" style={{ background: "#E3C9AE" }}>
            <div style={{ color: "red" }}>
              <div>$2,213,123.80</div>
              <div>
                <small> $2,213,123.80</small>
              </div>
            </div>
            <div>
              <div>
                <button
                  style={{
                    width: "60px",
                    background: "black",
                    color: "white",
                    borderRadius: "5px ",
                    border: "1px solid white",
                  }}
                >
                  <AttachMoney />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          className="totalRevenue "
          sx={{
            backgroundColor: "black",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            color: "wheat",
          }}
        >
          <div style={{ background: "#C3AE97" }}>
            <div style={{ color: "black", fontSize: "19px" }}>Total Sales</div>
            <div>
              {" "}
              <small style={{ color: "green" }}>Oct 26/ 23-Nov</small>{" "}
            </div>
          </div>
          <div>
            <div style={{ background: "#E3C9AE", height: "18vh" }}>
              <div style={{ color: "black", fontSize: "20px" }}>Share</div>
              <div>
                {" "}
                <small style={{ color: "red" }}>$2,453.80</small>{" "}
              </div>
              <div>
                <small style={{ fontSize: "9.5px", color: "black" }}>
                  -8.5% year over year
                </small>
              </div>
            </div>
          </div>
          <div className="flexBTN" style={{ background: "#E3C9AE" }}>
            <div style={{ color: "red" }}>
              <div>$2,213,123.80</div>
              <div>
                <small> $2,213,123.80</small>
              </div>
            </div>
            <div>
              <div>
                <button
                  style={{
                    width: "60px",
                    background: "black",
                    color: "white",
                    borderRadius: "5px ",
                    border: "1px solid white",
                  }}
                >
                  <CurrencyBitcoin />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
