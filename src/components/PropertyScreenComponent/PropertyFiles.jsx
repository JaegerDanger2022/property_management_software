import { Assignment, Download } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import React from "react";

const PropertyFiles = () => {
  return (
    <div style={{ height: "57vh" }}>
      <Card
        sx={{
          width: "15vw",
          height: "15vh",
          borderRadius: "3%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: ".4",

            marginTop: "2vh",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: ".3",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              {" "}
              <Assignment />{" "}
            </IconButton>
          </div>
          <div style={{ flex: "0.7", fontSize: ".6em", paddingTop: "1vh" }}>
            {" "}
            <span style={{ fontWeight: "600" }}>
              Identify proof docunents{" "}
            </span>{" "}
            <br /> 1.2mb
          </div>
        </div>
        <div style={{ flex: ".4", display: "flex" }}>
          <div style={{ flex: "0.3" }}> </div>
          <div style={{ flex: "0.7" }}>
            {" "}
            <Download sx={{ width: 15, color: "red" }} />{" "}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PropertyFiles;
