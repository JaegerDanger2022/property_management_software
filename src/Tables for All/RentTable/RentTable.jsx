import React from "react";
import "../../../App.css";
import {
  AccessAlarm,
  AddIcCall,
  AddLocation,
  Assignment,
  CalendarMonth,
  ChangeCircle,
  Home,
  MoreVert,
  OfflinePin,
  Timer,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function RentTable() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
    padding: "15px 10px",
  };
  const dividerStyle = {
    borderLeft: "1px solid black",
    height: "100%",
    margin: "0 5px",
  };

  return (
    <div className="propTable">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle} scope="col" className="propertyColor">
              Type
            </th>
            <th style={cellStyle} className="propertyColor">
              Term
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Charges
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Status
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Amount
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
              <div className="tenants">
                <div>
                  <IconButton disabled>
                    {" "}
                    <Home />
                  </IconButton>
                </div>
                <div>
                  <div className="tenantsPriority">
                    <div>Recurring Rent</div>
                  </div>
                  <div>
                    <div className="tasksNumber">
                      <div>
                        <div className="futureTenants">
                          <div>
                            <ChangeCircle />{" "}
                          </div>
                          <div>Monthly</div>
                        </div>
                      </div>
                    </div>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <CalendarMonth />
                      </div>
                      <div>10/11/2029</div>
                    </div>
                    <div className="dateAndTime">
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div>Next Change</div>
                          <div>10/22/2091</div>
                        </div>
                      </div>
                    </div>
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
                    <div className="tenantContact">
                      <div>Rental Income</div>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "14px",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <Timer />
                        </div>
                        <div>Future</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================================================== */}
            </td>
            <td style={cellStyle}>
              {/* ==================  Menu ======================= */}
              <div className="leaseAmount">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>$5000.00</div>
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
                  <MoreVert />
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

export default RentTable;
