import React from "react";
import "../../../App.css";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Tab, Tabs } from "@mui/material";
import Navbar from "../../narvigationBar/Navbar";

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
          <Navbar
            overview={"overview"}
            files={"files"}
            Notes={"Note"}
            Tasks={"Tasks"}
            signatureRequests={"Signature Requests"}
            rentalApplication={"Rental Application"}
            tenants={"Tenants"}
            leases={"Leases"}
            units={"Units"}
          />
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
        <div>ax</div>
        <div></div>
      </div>
    </>
  );
}

export default Units;
