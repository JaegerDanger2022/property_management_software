import {
  AdminPanelSettings,
  Badge,
  Folder,
  PlayCircle,
} from "@mui/icons-material";
import React from "react";
import "../../../App.css";
import { Box } from "@mui/material";
import InteractiveList from "../../../interactive/Interactive";

function ActualReports() {
  return (
    <>
      <div className="reportsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <h1 style={{ lineHeight: ".1" }}>
                Reports <br />
              </h1>{" "}
            </div>
          </div>
        </div>
        <div>
          {/* =============***Navigation SideBar*******====*/}
          {/* <div className="ReportsBox"> */}
          <div style={{ margin: "9px 0px" }}>
            <Box
              sx={{
                width: 1000,
                height: 500,
                justifyItems: "center",
                borderRadius: 5,
                backgroundColor: "pink",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {/* ============**Inside Cards*** */}
              <div className="PaymentReceivedScroll">
                <InteractiveList
                  favorite={"Favorite"}
                  rightPrimary={"Cash Flow Statement"}
                  leftPrimary={"Balance Sheet"}
                />
                <InteractiveList
                  rightPrimary={"Profit and Loss"}
                  leftPrimary={"Owner Statement"}
                />
                <InteractiveList leftPrimary={"Owner Statement"} />
                <InteractiveList
                  favorite={"Business Overflow"}
                  rightPrimary={"Profit and Loss"}
                  leftPrimary={"Balance Sheet"}
                />
                <InteractiveList
                  rightPrimary={"Profit and Loss by Month"}
                  leftPrimary={"Balance Sheet by Month"}
                />
                <InteractiveList
                  rightPrimary={"Profit and Loss by Property"}
                  leftPrimary={"Balance Sheet by Property"}
                />
                <InteractiveList
                  rightPrimary={"Profit and Loss by Quarter"}
                  leftPrimary={"Balance Sheet by Quarter"}
                />
                <InteractiveList
                  rightPrimary={"Profit and Loss by Year"}
                  leftPrimary={"Balance Sheet by Year"}
                />
                <InteractiveList
                  rightPrimary={" Rent Roll"}
                  leftPrimary={"Cash Flow Statement"}
                />
                <InteractiveList
                  rightPrimary={" Rent Roll"}
                  leftPrimary={"Cash Flow Statement by Month"}
                />
              </div>
              {/* ============**End of Inside Cards*** */}
            </Box>
          </div>
          {/* =============*** End of Navigation SideBar*******==== */}
        </div>
      </div>
    </>
  );
}

export default ActualReports;
