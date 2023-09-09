import { Info, PlayCircle } from "@mui/icons-material";
import React from "react";
import "../../../App.css";

function ChartOfAccounting() {
  return (
    <>
      <div className="unitsContainer">
        <div>
          <div className="propertyHeader">
            <div>
              <small style={{ lineHeight: ".0" }}>
                Banking <br />
                Chart of Account
                <h1 style={{ fontSize: "1.4em", fontWeight: "500" }}>
                  Use these account to categorize and record your transactions.
                </h1>{" "}
              </small>{" "}
            </div>
          </div>
        </div>
        <div>
          {/* =============***Navigation SideBar*******====*/}
          <div className="chartOfAccounting">
            <div>
              <div className="watch">
                <div>
                  <Info />
                </div>
                <div>Understanding your chart of accounts</div>
              </div>
            </div>
            <div>
              <div className="watch">
                <div>
                  <Info />
                </div>
                <div>How do I set up my chart of accounts?</div>
              </div>
            </div>
            <div>
              <div className="watch">
                <div>
                  <Info />
                </div>
                <div>How do I change my default accounts</div>
              </div>
            </div>
            <div>
              <div className="watch">
                <div>
                  {" "}
                  <PlayCircle />{" "}
                </div>
                <div>Watch a video</div>
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

export default ChartOfAccounting;
