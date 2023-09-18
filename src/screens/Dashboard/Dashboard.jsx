import React from "react";
import "../../App.css";
import { Avatar, Box, Card, Divider, IconButton } from "@mui/material";
import {
  AttachMoney,
  CurrencyBitcoin,
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
            backgroundColor: "#F3F0EB",
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
                height: "15vh",
                // padding: "30px ",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            ></Card>
          </div>
          {/*  END TOP VIEWED PROPERTY -> IMAGE DISPLAY*/}

          {/* TOP VIEWED PROPERTY -> AMAZON */}
          <div style={{ background: "#F3F0EB" }}>
            <div className="amazon-content">
              <div>
                <div className="content">
                  <div>Amazon Echo Plus</div>
                  <div>-Premium Quality</div>
                </div>
              </div>
              <div>
                <div className="content-price">
                  <div style={{ color: "red" }}>$45.00K-$55.00K</div>
                  <div>
                    <small style={{ color: "green" }}>Asking Price</small>
                  </div>
                </div>
              </div>
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
            <div style={{ margin: "6px 10px" }}> Top viewed Properties </div>
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
            backgroundColor: "#F3F0EB",
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
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            color: "wheat",
          }}
        >
          <div style={{ background: "#F3F0EB" }}>
            <div
              style={{ color: "black", fontSize: "19px", padding: "10px 7px" }}
            >
              Total Sales
            </div>
            <div style={{ margin: "-10px 0px" }}>
              {" "}
              <small style={{ color: "green", margin: "0 7px" }}>
                Oct 26/ 23-Nov
              </small>{" "}
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div style={{ background: "#EFECFD", height: "18vh" }}>
              <div style={{ color: "black", fontSize: "19px" }}>Share</div>
              <div>
                {" "}
                <small style={{ color: "red" }}>$2,453.80</small>{" "}
              </div>
              <div>
                <small style={{ fontSize: "7.5px", color: "black" }}>
                  -8.5% year over year
                </small>
              </div>
            </div>
          </div>
          <div className="flexBTN" style={{ background: "#EFECFD" }}>
            <div style={{ color: "red", margin: "10px 7px" }}>
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
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            color: "wheat",
          }}
        >
          <div style={{ background: "#F3F0EB" }}>
            <div
              style={{ color: "black", fontSize: "19px", padding: "10px 7px" }}
            >
              Total Sales
            </div>
            <div style={{ margin: "-10px 0px" }}>
              {" "}
              <small style={{ color: "green", margin: "0 7px" }}>
                Oct 26/ 23-Nov
              </small>{" "}
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div style={{ background: "#EFECFD", height: "18vh" }}>
              <div style={{ color: "black", fontSize: "19px" }}>Share</div>
              <div>
                {" "}
                <small style={{ color: "red" }}>$2,453.80</small>{" "}
              </div>
              <div>
                <small style={{ fontSize: "7.5px", color: "black" }}>
                  -8.5% year over year
                </small>
              </div>
            </div>
          </div>
          <div className="flexBTN" style={{ background: "#EFECFD" }}>
            <div style={{ color: "red", margin: "10px 7px" }}>
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
    </div>
  );
};

export default Dashboard;
