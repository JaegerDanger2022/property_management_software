import React from "react";
import "../../App.css";
import {
  AccessAlarm,
  AddIcCall,
  AddLocation,
  CalendarMonth,
  MoreVert,
} from "@mui/icons-material";
import { Avatar, Checkbox, IconButton } from "@mui/material";

function TenantsTable() {
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
              Tenants
            </th>
            <th style={cellStyle} className="propertyColor">
              Properties
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Contact Infomation
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Created At
            </th>
            {/* <th style={cellStyle} scope="col" className="propertyColor">
              Status
            </th> */}
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
                  <Checkbox {...label} defaultChecked />
                  <IconButton disabled>
                    {" "}
                    <Avatar />
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
                            <AccessAlarm />{" "}
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
                  <div className="tenantLocation">
                    <div>
                      <AddLocation />
                    </div>
                    <div>705 Virginia WLK</div>
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
                        <AddIcCall />
                      </div>
                      <div>+233 (###)</div>
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
                        <CalendarMonth />
                      </div>
                      <div>10/19/2019</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================================================== */}
            </td>
            {/* <td style={cellStyle}> */}
            {/* ================== Active Units ======================= */}
            {/* <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <Book />
                </div>
                <div>2 Units</div>
              </div> */}
            {/* ================================================== */}
            {/* </td> */}
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
        {/* <tfoot>
          <tr>
            <th style={cellStyle}>Total</th>
            <td style={cellStyle}>21,000</td>
            <td style={cellStyle}>Total 1</td>
            <td style={cellStyle}>Total 2</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
}

export default TenantsTable;
