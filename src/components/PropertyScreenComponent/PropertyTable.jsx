import React from "react";
import "../../App.css";
import {
  AddLocation,
  Apartment,
  Assignment,
  Book,
  MoreVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function PropertyTables() {
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
    margin: "0 20px",
  };

  return (
    <div className="propTable">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle} scope="col" className="propertyColor">
              Property
            </th>
            <th style={cellStyle} className="propertyColor">
              Type
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Total Units
            </th>
            <th style={cellStyle} scope="col" className="propertyColor">
              Active Units
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
              <div className="property">
                <div>
                  <IconButton>
                    {" "}
                    <Assignment />
                  </IconButton>
                </div>
                <div>
                  <div> 656 Adegate Road</div>
                  <div>
                    <div className="location">
                      <div>
                        {" "}
                        <AddLocation />{" "}
                      </div>
                      <div>Linda door, 45345</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ====================================== */}
            </th>
            {/* ================  Type ==================== */}
            <th style={cellStyle} scope="row">
              {/* ============================ */}
              <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <Apartment />
                </div>
                <div>Office</div>
              </div>
              {/* =============== Total Units ================ */}
            </th>
            <td style={cellStyle}>
              <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <Book />
                </div>
                <div>2 units</div>
              </div>
            </td>
            <td style={cellStyle}>
              {/* ================== Active Units ======================= */}
              <div className="office">
                <div>
                  <span style={dividerStyle}></span>{" "}
                </div>
                <div>
                  <Book />
                </div>
                <div>2 Units</div>
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

export default PropertyTables;
