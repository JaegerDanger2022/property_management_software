import { AdminPanelSettings, PlayCircle } from "@mui/icons-material";
import React from "react";
import "../../../App.css";

function MyTasks() {
  return (
    <>
      <div className="unitsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <small style={{ lineHeight: ".0" }}>
                My Tasks <br />
                <h1 style={{ fontSize: "1.4em", fontWeight: "500" }}>
                  organize and keep track of your tasks and work orders
                </h1>{" "}
              </small>{" "}
            </div>
          </div>
        </div>
        <div>
          {/* =============***Navigation SideBar*******====*/}
          <div className="allMyTasks">
            <div>
              <div className="mytasksList">
                <div>
                  <AdminPanelSettings />
                </div>
                <div>How do i create a task?</div>
              </div>
            </div>
            <div>
              <div className="mytasksList">
                <div>
                  <AdminPanelSettings />
                </div>
                <div>How do i update and edit tasks?</div>
              </div>
            </div>
            <div>
              <div className="mytasksList">
                <div>
                  {" "}
                  <PlayCircle />{" "}
                </div>
                <div>Watch an example of creating a task</div>
              </div>
            </div>
            <div>
              <div className="watch">
                <div>
                  {" "}
                  <PlayCircle />{" "}
                </div>
                <div>Watch an example of updating a task</div>
              </div>
            </div>
          </div>
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default MyTasks;
