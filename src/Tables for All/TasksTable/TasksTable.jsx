import React from "react";
// import "../../../App.css";
import "../../App.css";
import {
  AccessAlarm,
  AddLocation,
  Apartment,
  Assignment,
  Book,
  CalendarMonth,
  CancelOutlined,
  Dangerous,
  MoreVert,
  WrongLocation,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

function TasksTable() {
  const tableStyle = {
    borderCollapse: "collapse",
    border: "blue",
    letterSpacing: "1px",

    fontSize: "0.8rem",
    width: "100%",
    color: "black",
    backgroundColor: "#F5F5F5",
  };

  const cellStyle = {
    padding: "5px 10px",
  };
  const dividerStyle = {
    borderLeft: "1px solid black",
    height: "100%",
    margin: "0 10px",
  };

  return (
    <div className="propTable">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle} scope="col" className="propertyColor">
              Task
            </th>
            <th style={cellStyle} className="propertyColor">
              Assign To
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Due at
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Related To
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Status
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Menu
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={cellStyle} scope="row">
              {/* ============== Property ==========*/}
              <div className="tasks">
                <div>
                  <IconButton>
                    {" "}
                    <Assignment sx={{ color: "#DBE0AD" }} />
                  </IconButton>
                </div>
                <div>
                  <div className="tasksPriority">
                    <div> Task</div>
                    <div>
                      <small
                        style={{
                          background: "#AABA9F",
                          color: "#fff",
                          borderRadius: "4px",
                          fontWeight: "700",
                        }}
                      >
                        Medium Priority
                      </small>
                    </div>
                  </div>
                  <div>
                    <div className="tasksNumber">
                      <div>Joana Rocks</div>
                      <div>
                        <div className="tasksPropertyLocation">
                          <div>
                            <Dangerous
                              sx={{ fontSize: "10px", color: "red" }}
                            />
                          </div>
                          <div>#7865</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="tasksHouseName">tasks</div>
                  </div>
                </div>
              </div>
              {/* ====================================== */}
            </th>
            {/* ================  Type ==================== */}
            <th style={cellStyle} scope="row">
              {/* ============================ */}
              <div className="tasksUsers">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <div className="tasksUsersName">
                    <div>
                      <Avatar sx={{ fontSize: "10px" }}>User</Avatar>
                    </div>
                    <div>user</div>
                  </div>
                </div>
                <div>
                  <div className="tasksUsersName">
                    <div>
                      <Avatar sx={{ fontSize: "10px" }}>User</Avatar>
                    </div>
                    <div>user</div>
                  </div>
                </div>
              </div>
              {/* =============== Total Units ================ */}
            </th>
            <td style={cellStyle}>
              <div className="tasksUsersDate">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <CalendarMonth
                          sx={{
                            color: "#DBE0AD",
                            // background: "black",
                            borderRadius: "7px",
                            fontSize: "19px",
                          }}
                        />
                      </div>
                      <div>10/11/2029</div>
                    </div>
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <AccessAlarm
                          sx={{
                            color: "#DBE0AD",
                            // background: "black",
                            borderRadius: "7px",
                            fontSize: "19px",
                          }}
                        />
                      </div>
                      <div>Monday</div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td style={cellStyle}>
              {/* ================== Active Units ======================= */}
              <div className="tasksUsersDate">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <AddLocation
                          sx={{
                            color: "#AABA9F",
                            background: "white",
                            fontSize: "19px",
                            borderRadius: "7px",
                          }}
                        />
                      </div>
                      <div>162 Huron Terry</div>
                    </div>
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <Book
                          sx={{
                            color: "#AABA9F",
                            background: "white",
                            fontSize: "19px",
                            borderRadius: "7px",
                          }}
                        />
                      </div>
                      <div>Unit 1</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================================================== */}
            </td>
            <td style={cellStyle}>
              {/* ================== Active Units ======================= */}
              <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <CancelOutlined
                    sx={{
                      color: "#EA7010",
                      background: "white",
                      fontSize: "19px",
                      borderRadius: "7px",
                    }}
                  />
                </div>
                <div style={{ color: "#C99D7B" }}>In Progress</div>
              </div>
              {/* ================================================== */}
            </td>
            <td style={cellStyle}>
              {/* ==================  Menu ======================= */}
              <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <IconButton>
                    {" "}
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
              {/* ================================================== */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;
