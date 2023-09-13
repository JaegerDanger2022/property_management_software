import React from "react";
import "../../App.css";
import {
  AddAPhoto,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  MarkAsUnread,
  MoreVert,
  PlusOne,
  StrikethroughS,
  ToggleOff,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";

const PropertyNotes = () => {
  return (
    <div style={{ height: "57vh" }}>
      <div className="Propertynotes">
        <div>
          <Card sx={{ height: "100%", background: "#F3F0EB" }}>
            <div className="leftStickyNote">
              <div>
                <div className="stickyHeader">
                  <div>
                    <div>Sticky Notes</div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        style={{ width: "250px" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="scrollable-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Reprehenderit id at, a nostrum fuga quis, quasi deserunt,
                      consequuntur molestias suscipit est blanditiis deleniti
                      eum molestiae fugiat eos ullam recusandae. Illum. Lorem
                      ipsum dolor, sit amet consectetur adipisicing elit.
                      Reprehenderit id at, a nostrum fuga quis, quasi deserunt,
                      consequuntur molestias suscipit est blanditiis deleniti
                      eum molestiae fugiat eos ullam recusandae. Illum. Lorem
                      ipsum dolor, sit amet consectetur adipisicing elit.
                      Reprehenderit id at, a nostrum fuga quis, quasi deserunt,
                      consequuntur molestias suscipit est blanditiis deleniti
                      eum molestiae fugiat eos ullam recusandae. Illum.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* ============= StickyRight */}
        <div>
          <Card sx={{ height: "100%" }}>
            <div className="rightStickyNote ">
              <div>
                <Card sx={{ height: "100%", background: "pink" }}>
                  <div className="cardGrid">
                    <div>
                      {/* ====== Plus & minus** */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                          background: "brown",
                        }}
                      >
                        <div>
                          <PlusOne />
                        </div>
                        <div>
                          <div>
                            <MoreVert />
                            <MarkAsUnread />
                          </div>
                        </div>
                      </div>
                      {/* ====== End Plus & minus** */}
                    </div>
                    <div>Take Note</div>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                            background: "yellow",
                          }}
                        >
                          <div>
                            <FormatBold />
                          </div>

                          <div>
                            {" "}
                            <FormatItalic />
                          </div>
                          <div>
                            {" "}
                            <FormatUnderlined />
                          </div>
                          <div>
                            {" "}
                            <StrikethroughS />
                          </div>
                          <div>
                            {" "}
                            <ToggleOff />
                          </div>
                          <div>
                            {" "}
                            <AddAPhoto />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* ======= END STICKY */}
              <div>
                {/* ======== */}
                <Card sx={{ height: "100%" }}>
                  <div className="cardGrid">
                    <div>
                      {/* ====== Plus & minus** */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                        }}
                      >
                        <div>
                          <PlusOne />
                        </div>
                        <div>
                          <div>
                            <MoreVert />
                            <MarkAsUnread />
                          </div>
                        </div>
                      </div>
                      {/* ====== End Plus & minus** */}
                    </div>
                    <div>Take Note</div>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                          }}
                        >
                          <div>
                            {" "}
                            <FormatBold />
                          </div>

                          <div>
                            {" "}
                            <FormatItalic />
                          </div>
                          <div>
                            {" "}
                            <FormatUnderlined />
                          </div>
                          <div>
                            {" "}
                            <StrikethroughS />
                          </div>
                          <div>
                            {" "}
                            <ToggleOff />
                          </div>
                          <div>
                            {" "}
                            <AddAPhoto />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                {/* =============== */}
              </div>
              <div>
                {/* ======== */}
                <Card sx={{ height: "100%" }}>
                  <div className="cardGrid">
                    <div>
                      {/* ====== Plus & minus** */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                        }}
                      >
                        <div>
                          <PlusOne />
                        </div>
                        <div>
                          <div>
                            <MoreVert />
                            <MarkAsUnread />
                          </div>
                        </div>
                      </div>
                      {/* ====== End Plus & minus** */}
                    </div>
                    <div>Take Note</div>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                          }}
                        >
                          <div>
                            {" "}
                            <FormatBold />
                          </div>

                          <div>
                            {" "}
                            <FormatItalic />
                          </div>
                          <div>
                            {" "}
                            <FormatUnderlined />
                          </div>
                          <div>
                            {" "}
                            <StrikethroughS />
                          </div>
                          <div>
                            {" "}
                            <ToggleOff />
                          </div>
                          <div>
                            {" "}
                            <AddAPhoto />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                {/* =============== */}
              </div>
              <div>
                {/* ======== */}
                <Card sx={{ height: "100%" }}>
                  <div className="cardGrid">
                    <div>
                      {/* ====== Plus & minus** */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5px",
                        }}
                      >
                        <div>
                          <PlusOne />
                        </div>
                        <div>
                          <div>
                            <MoreVert />
                            <MarkAsUnread />
                          </div>
                        </div>
                      </div>
                      {/* ====== End Plus & minus** */}
                    </div>
                    <div>Take Note</div>
                    <div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1em",
                          }}
                        >
                          <div>
                            {" "}
                            <FormatBold />
                          </div>

                          <div>
                            {" "}
                            <FormatItalic />
                          </div>
                          <div>
                            {" "}
                            <FormatUnderlined />
                          </div>
                          <div>
                            {" "}
                            <StrikethroughS />
                          </div>
                          <div>
                            {" "}
                            <ToggleOff />
                          </div>
                          <div>
                            {" "}
                            <AddAPhoto />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                {/* =============== */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyNotes;
