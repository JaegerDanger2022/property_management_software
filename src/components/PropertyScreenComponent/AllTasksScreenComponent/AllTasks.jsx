import { AdminPanelSettings, MoreVert, PlayCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "../../../App.css";
import Navbar from "../../narvigationBar/Navbar";

function AllTasks() {
  return (
    <>
      <div className="unitsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <small style={{ lineHeight: ".0" }}>
                Tasks <br />
                <h1 style={{ fontSize: "1.4em", fontWeight: "500" }}>
                  Leak #809H
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
          <div className="navbarWidth">
            <Navbar
              overview={"overview"}
              units={"Subtasks"}
              leases={"Notes"}
              tenants={"Files"}
            />
          </div>
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
        <div>ax</div>
        <div></div>
      </div>
    </>
  );
}

export default AllTasks;
