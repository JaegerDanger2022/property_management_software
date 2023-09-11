import React from "react";
import "../../../App.css";
import {
  Add,
  AddAPhoto,
  AddLocation,
  Book,
  Home,
  MoreVert,
} from "@mui/icons-material";
import { Card, IconButton, Paper, Tab, Tabs } from "@mui/material";
import Navbar from "../../narvigationBar/Navbar";
import { Box } from "@mui/system";
import propertyImage from "../../../assets/images/photo_2023-08-28_07-41-03.jpg";
import PropImage from "../../../assets/images/jp.jpg";

function Units() {
  return (
    <>
      <div className="unitsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <small style={{ lineHeight: ".1" }}>
                Property <br />
                <h1 style={{ fontSize: "2em", fontWeight: "500" }}>
                  Linda door, 45345
                </h1>{" "}
              </small>{" "}
            </div>
            <div>
              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
          </div>
        </div>
        <div>
          {/* =============***Navigation SideBar*******==== */}
          {/* <Navbar
            overview={"overview"}
            files={"files"}
            Notes={"Note"}
            Tasks={"Tasks"}
            signatureRequests={"Signature Requests"}
            rentalApplication={"Rental Application"}
            tenants={"Tenants"}
            leases={"Leases"}
            units={"Units"}
          /> */}
          <div
            className="navbar"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              width: "96%",
              height: "5vh",
              background: "#F3F0EB",
            }}
          >
            <div className="nav-item">Overview</div>
            <div className="nav-item">Tasks</div>
            <div className="nav-item">Tenants</div>
            <div className="nav-item">Leases</div>
            <div className="nav-item">Units</div>
            <div className="nav-item">Notes</div>
            <div className="nav-item">Rental Application</div>
            <div className="nav-item">Files</div>
          </div>
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
        <div>
          {/* ============ *** Contents ***============== */}
          <div className="leftCards">
            <div style={{ margin: "80px 0px" }}>
              <Box
                sx={{
                  width: 510,
                  height: 300,
                  borderRadius: 5,
                  color: "white",
                  fontWeight: 500,
                  backgroundImage: `url(${propertyImage})`,
                  backgroundSize: "cover",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    width: "101%",
                    height: "100%",
                    transform: "scaleX(2)",
                    position: "absolute",
                    background: "linear-gradient(to left, #F3F0EB, #080808)",
                    opacity: 0.9, // Set the opacity value (0.7 for 70% opacity)
                  },
                }}
              >
                <div className="listonCard" style={{ color: "white" }}>
                  <div>
                    Discover Your <br /> Dream Home: <br />
                    Find Your Perfect <br /> Property Today
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div
                      style={{
                        background: "#F3F0EB",
                        color: "black",
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <AddLocation />
                        </div>
                        <small>
                          Location <br /> Linda, 123
                        </small>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <Home />
                        </div>
                        <small>
                          Home Type <br /> Linda, 123
                        </small>
                      </div>
                      <div>
                        <button
                          style={{
                            height: "4vh",
                            color: "wheat",
                            border: "2px solid black",
                            borderRadius: "4px",
                            width: "60px",
                            background:
                              "linear-gradient(to left, #F3F0EB, #080808)",
                          }}
                        >
                          search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* =============================================================== */}
                <div style={{ margin: "3% 60%" }}>
                  <Box
                    sx={{
                      width: 200,
                      height: 300,
                      position: "fixed",
                      borderRadius: 5,
                      backgroundImage: `url(${PropImage})`,
                      backgroundSize: "cover",
                      backgroundColor: "peru",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        backgroundColor: "#E85020",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  ></Box>
                </div>
              </Box>
            </div>
          </div>
          {/* ===========================**Right Cards */}
          <div className="rightCards">
            <div>
              <div
                style={{
                  display: "grid",
                  placeContent: "center",
                  placeItems: "center",
                  justifyContent: "center",
                  // background: "green",
                  height: "70%",
                  border: "3px solid white",
                  borderRadius: "20px",
                  placeContent: "center",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    // alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // background: "red",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div>
                    <AddAPhoto />
                  </div>
                  <div style={{ color: "black" }}>Lease Status</div>
                  <div style={{ color: "white" }}>Active</div>
                </div>
              </div>
            </div>
            <div>
              {/* ==================== */}
              <div
                style={{
                  display: "grid",
                  placeContent: "center",
                  placeItems: "center",
                  justifyContent: "center",
                  // background: "green",
                  height: "70%",
                  border: "3px solid white",
                  borderRadius: "20px",

                  placeContent: "center",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    // alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <AddAPhoto />
                  </div>
                  <div style={{ color: "black" }}>Monthly Rent</div>
                  <div style={{ color: "white" }}>$2000.00</div>
                </div>
              </div>
              {/* ========================= */}
            </div>
            <div>
              {/* ===================== */}

              {/* ========================== */}
            </div>
            <div>
              {/* ================ */}
              <div
                style={{
                  display: "grid",
                  placeContent: "center",
                  placeItems: "center",
                  justifyContent: "center",
                  // background: "green",
                  height: "70%",
                  border: "3px solid white",
                  borderRadius: "20px",
                  placeContent: "center",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    // alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <AddAPhoto />
                  </div>
                  <div style={{ color: "black" }}>Deposite Held</div>
                  <div style={{ color: "white" }}>$50700.00</div>
                </div>
              </div>
              {/* ==================== */}
            </div>
          </div>
          {/* ===========================**End**Right Cards */}

          {/* ============ *** END Contents ***============== */}
        </div>
      </div>
    </>
  );
}

export default Units;
