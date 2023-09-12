import React from "react";
import "../../App.css";
import PaymentRecieveRow from "../../Recent Payment Receive/PaymentRecieveRow";
import {
  Book,
  Cyclone,
  MoreVert,
  VolunteerActivism,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import TenantsTable from "../../Tables for All/tenantTable/TenantsTable";
// import TenantsTable from "../../Tables for All/TasksTable/TenantsTable";

const PropertyTenants = () => {
  return (
    <div style={{ height: "57vh" }}>
      {/* THIS IS DETAILS OF THE RECENT TENANT REQUEST IN RENTAL PROPERTY */}
      <div className="taskGrid PaymentReceivedScroll">
        <div>
          <div className="classforTask">
            <div>
              {/* =========== */}
              <div className="gridforTask">
                <div>
                  {/* ================= */}
                  <div className="taskRequest">
                    <div>Recent Tenant Requests</div>
                    <div>
                      <div className="taskIcons">
                        <div>
                          <IconButton>
                            <Cyclone />
                          </IconButton>
                        </div>
                        <div>
                          <IconButton>
                            <MoreVert />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ======================= */}
                </div>
                <div>
                  <Divider />
                  <div>
                    <div className="scrollable-content">
                      <PaymentRecieveRow
                        amountReceived={"5000.00"}
                        tenantName={<VolunteerActivism sx={{}} />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={"$"}
                        address={"Virginia street"}
                      />
                      <PaymentRecieveRow
                        amountReceived={"5000.00"}
                        tenantName={<VolunteerActivism />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={"$"}
                        address={"Virginia street"}
                      />
                      <PaymentRecieveRow
                        amountReceived={"5000.00"}
                        tenantName={<VolunteerActivism />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={"$"}
                        address={"Virginia street"}
                      />
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
              {/* ============ */}
            </div>
            <div>
              {/* =========== */}
              <div className="gridforTask">
                <div>
                  {/* ================= */}
                  <div className="tenantRequest">
                    {/* =========== */}
                    <div className="utility">
                      <div>
                        <h5 style={{ fontSize: "19px" }}>Utility Billing</h5>
                      </div>
                      <div>
                        <div className="period">
                          <div style={{ color: "white", fontWeight: "900" }}>
                            Last billing period
                          </div>
                          <div style={{ color: "#EA7010" }}>
                            1 Jan 2019-31 Dec 2019
                          </div>
                        </div>
                      </div>
                      <button
                        style={{
                          height: "5vh",
                          fontSize: "17px",
                          background: "#0C0C0C",
                          color: "#FFFFFF",
                        }}
                      >
                        Start utility billing
                      </button>
                    </div>
                    {/* =================== */}
                  </div>
                  {/* ======================= */}
                </div>
                <div>
                  <Divider />
                  <div>
                    <div className="currentBilling">
                      <div>Current billling period</div>
                      <div>
                        <div style={{ color: "green" }}>
                          1 Jan 2019-31 Dec 2028
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
              {/* ============ */}
            </div>
          </div>
        </div>
        <div>
          {/* ====== Task Table will be here ======= */}

          {/* <TenantsTable /> */}
          <TenantsTable />

          {/* ========== END OF TASKS TABLE ============ */}
        </div>
      </div>
      {/* END ON PROPERTY TENANTS */}

      {/* END OF INSIDE PROPERTY TENANTS */}
    </div>
  );
};

export default PropertyTenants;
// style={{ height: "57vh" }}
