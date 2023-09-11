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
  Assessment,
  Assignment,
  Cancel,
  Error,
  MoreVert,
  Recycling,
} from "@mui/icons-material";
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
      {/* THIS CONTAIN RECENT PAYMENT RECEIVED HISTORY */}
      {/* ===========================================================***Try**** */}
      <div className="commonPadding">
        {" "}
        <Card
          className="Leases"
          sx={{
            backgroundColor: "#FEECEC",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          {/* ================================ */}
          <div>
            {/* =========================== */}
            <div className="leasesOutstandingBalnce">
              <div>Recent Payments Recieved</div>
              <div>
                <IconButton>
                  <Recycling />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>{" "}
              </div>
            </div>
            <Divider />
            {/* =========================== */}
          </div>

          <div className="PaymentReceivedScroll">
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Assignment sx={{ color: "black" }} />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Assignment sx={{ color: "black" }} />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Assignment sx={{ color: "black" }} />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Assignment sx={{ color: "black" }} />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Assignment sx={{ color: "black" }} />}
              recentTenantDate={"5 days ago"}
              address={"Virginia Street"}
              recentTenantIcon={"$"}
            />
          </div>
          {/* =================================== */}
        </Card>
      </div>
      {/* ===========================================================** End *Try**** */}
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
                borderRadius: "10px",
                width: "200px",
                height: "2vh",
                padding: "100px 23px",
                backgroundImage: `url('your-image-url.jpg')`,
                backgroundSize: "cover",
                // color: "white",
              }}
            ></Card>
          </div>
          {/*  END TOP VIEWED PROPERTY -> IMAGE DISPLAY*/}

          {/* TOP VIEWED PROPERTY -> AMAZON */}
          <div>
            <small>
              {" "}
              Amazon Echo Plus (3nd Gen) <br /> -Premium Quality{" "}
            </small>
            <div>
              {" "}
              <small className="askingPrice">
                $45.00K-$55.00K{" "}
                <span style={{ padding: "0 25px" }}>Asking Price</span>{" "}
              </small>{" "}
            </div>
          </div>
          {/* END OF TOP VIEWED PROPERTY -> AMAZON */}

          {/* TOP VIEWED PROPERTY HEADLINE */}
          <div>Top viewed Properties</div>
          {/* END OF TOP VIEWED PROPERTY HEADLINE */}
        </Card>
      </div>{" "}
      {/* END OF TOP VIED PROPERTY */}
      <div className="commonPadding">
        {" "}
        <Card
          className="Leases"
          sx={{
            backgroundColor: "#FEECEC",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          {/* ================================ */}
          <div>
            {/* =========================== */}
            <div className="leasesOutstandingBalnce">
              <div>Leases Outstanding Balance</div>
              <div>
                <IconButton>
                  <Recycling />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>{" "}
              </div>
            </div>
            <Divider />
            {/* =========================== */}
          </div>

          <div className="PaymentReceivedScroll">
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Error />}
              recentTenantDate={"705 virginia Lane"}
              address={"Joana Rocks"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"900,000"}
              tenantName={<Error />}
              recentTenantDate={"705 door Lane"}
              address={"Kofi Rocks"}
              recentTenantIcon={"$"}
            />
            <PaymentRecieveRow
              amountReceived={"500,000"}
              tenantName={<Error />}
              recentTenantDate={"705 virginia Lane"}
              address={"J Rocks"}
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
            backgroundColor: "#EFECFD",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
            // paddingTop: "5%",
          }}
        >
          <div>
            <div>Total Sales</div>
            <div>
              {" "}
              <small>Oct 26/ 23-Nov</small>{" "}
            </div>
          </div>
          <div>
            <div>Share</div>
            <div>
              {" "}
              <small>$2,453.80</small>{" "}
            </div>
            <div>
              <small style={{ fontSize: "9px" }}>-8.5% year over year</small>
            </div>
          </div>
          <div className="flexBTN">
            <div>
              <div>$2,213,123.80</div>
              <div>
                <small> $2,213,123.80</small>
              </div>
            </div>
            <div>
              <div>BTN</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="commonPadding">
        {" "}
        <Card
          className="totalRevenue "
          sx={{
            backgroundColor: "#EFECFD",
            height: "100%",
            width: "100%",
            borderRadius: "1dvw",
          }}
        >
          <div>
            <div>Total Sales</div>
            <div>
              {" "}
              <small>Oct 26/ 23-Nov</small>{" "}
            </div>
          </div>
          <div>
            <div>Share</div>
            <div>
              {" "}
              <small>$2,453.80</small>{" "}
            </div>
            <div>
              <small style={{ fontSize: "9px" }}>-8.5% year over year</small>
            </div>
          </div>
          <div className="flexBTN">
            <div>
              <div>$2,213,123.80</div>
              <div>
                <small> $2,213,123.80</small>
              </div>
            </div>
            <div>
              <div>BTN</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
