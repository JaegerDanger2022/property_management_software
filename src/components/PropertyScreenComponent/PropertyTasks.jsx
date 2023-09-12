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
import TasksTable from "../../Tables for All/TasksTable/TasksTable";

const PropertyTasks = () => {
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
                  <div className="taskRequest">
                    <div>Recent Tenant Requests</div>
                    <div>
                      <div className="taskIcons">
                        <div>
                          <IconButton>
                            <VolunteerActivism />
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
                        tenantName={<VolunteerActivism />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={<Book />}
                        address={"Virginia street"}
                      />
                      <PaymentRecieveRow
                        amountReceived={"5000.00"}
                        tenantName={<VolunteerActivism />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={<Book />}
                        address={"Virginia street"}
                      />
                      <PaymentRecieveRow
                        amountReceived={"5000.00"}
                        tenantName={<VolunteerActivism />}
                        recentTenantDate={"24/98/9999"}
                        recentTenantIcon={<Book />}
                        address={"Virginia street"}
                      />
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

          <TasksTable />
          {/* ========== END OF TASKS TABLE ============ */}
        </div>
      </div>
      {/* END ON PROPERTY TENANTS */}

      {/* END OF INSIDE PROPERTY TENANTS */}
    </div>
  );
};

export default PropertyTasks;
