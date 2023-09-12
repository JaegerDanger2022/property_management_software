import React from "react";
import "../../../App.css";
import {
  AccessAlarm,
  AddIcCall,
  AddLocation,
  Assignment,
  CalendarMonth,
  MoreVert,
  OfflinePin,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function LeasesTable() {
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
              Lease Balance
            </th>
            <th style={cellStyle} className="propertyColor">
              Term
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Status
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Rent
            </th>
            {/* <th style={cellStyle} scope="col" className="propertyColor">
              Status
            </th> */}
            <th style={cellStyle} scope="col" className="propertyColor">
              Deposits
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
                    <Assignment />
                  </IconButton>
                </div>
                <div>
                  <div className="tenantsPriority">
                    <div> 12432 ATT ATT</div>
                  </div>
                  <div>
                    <div className="tasksNumber">
                      <div>
                        <div className="futureTenants">
                          <div>
                            <AddLocation />{" "}
                          </div>
                          <div>Future Tenant</div>
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="dateAndTime">
                      <div>
                        {" "}
                        <CalendarMonth />
                      </div>
                      <div>10/11/2029</div>
                    </div>
                    <div className="dateAndTime">
                      <div>Expires in 2.489 days</div>
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
                      <div>
                        {" "}
                        <OfflinePin />
                      </div>
                      <div>Active</div>
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
                      <div>$2,324,000.00/Monthly</div>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeasesTable;
