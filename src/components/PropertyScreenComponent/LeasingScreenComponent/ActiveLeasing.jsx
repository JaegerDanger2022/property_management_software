import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Navbar from "../../narvigationBar/Navbar";

function ActiveLeasing() {
  return (
    <>
      <div className="unitsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <small style={{ lineHeight: ".1" }}>
                705, viginia walking street <br />
                <h1 style={{ fontSize: "2em", fontWeight: "500" }}>
                  ATTM.ATT
                </h1>{" "}
              </small>{" "}
            </div>
            <div>
              <IconButton sx={{ color: "red" }}>
                <MoreVert />
              </IconButton>
            </div>
          </div>
        </div>
        <div>
          {/* =============***Navigation SideBar*******====*/}
          <Navbar
            overview={"overview"}
            tenants={"Tenants"}
            rentalApplication={"Transaction"}
            units={"Rent"}
            leases={"Deposits"}
            signatureRequests={"Signature Requests"}
            Tasks={"Tasks"}
            Notes={"Notes"}
            files={"Files"}
          />
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default ActiveLeasing;
