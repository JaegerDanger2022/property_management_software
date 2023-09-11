import React from "react";
import propertyImage from "../../assets/images/photo_2023-08-28_07-41-03.jpg";
import { Avatar, AvatarGroup, Box } from "@mui/material";
import PieChartWithPaddingAngle from "../Graphs/PropertyOverviewGraphhs/Piechart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Moving, People, TrendingDown } from "@mui/icons-material";
import SparkLine from "../Graphs/PropertyOverviewGraphhs/SparklineGraph";
import GropedBarGraph from "../Graphs/PropertyOverviewGraphhs/GropedBarGraph";

const PropertyOverview = ({
  totalUnits,
  activeUnits,
  propertyImage1,
  propertyImage2,
}) => {
  return (
    <div style={{ height: "57vh", display: "flex" }}>
      {/* PropertyOverview Testing{" "} */}
      <div style={{ flex: ".5", paddingTop: "3vh" }}>
        <Box
          sx={{
            width: "30vw",
            height: "39vh",
            borderRadius: "5%",
            color: "white",
            fontWeight: 500,
            backgroundImage: `url(${propertyImage1})`,
            backgroundSize: "contain",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            position: "relative",
            overflow: "hidden",
            marginLeft: "2vw",
            // "&::before": {
            //   content: '""',
            //   width: "101%",
            //   height: "100%",
            //   transform: "scaleX(2)",
            //   position: "absolute",
            //   background: "linear-gradient(to left, #F3F0EB, #080808)",
            //   opacity: 0.9, // Set the opacity value (0.7 for 70% opacity)
            // },
          }}
        ></Box>
        <Box
          sx={{
            width: "16vw",
            backgroundSize: "cover",
            height: "39vh",
            borderRadius: "5%",
            zIndex: "10",
            position: "relative",
            left: "15vw",
            top: "-35vh",
            backgroundImage: `url(${propertyImage2})`,
          }}
        ></Box>
      </div>
      <div
        style={{
          flex: ".5",
          // backgroundColor: "yellow",
          paddingTop: "1vh",
          paddingLeft: "2vw",
          display: "flex",
          gap: "0vw",
          flexWrap: "wrap",
        }}
      >
        <PieChartWithPaddingAngle
          activeUnits={activeUnits}
          totalUnits={totalUnits}
        />
        <Box
          sx={{
            width: "13vw",
            height: "23vh",
            background: "whitesmoke",
            borderRadius: "8%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "2vw",
          }}
        >
          <div style={{ flex: ".2", display: "flex", paddingTop: "1.5vh" }}>
            <div style={{ flex: ".8", fontWeight: "600", fontSize: "1.1em" }}>
              {" "}
              Total Tenants{" "}
            </div>
            <div style={{ flex: ".2" }}>
              {" "}
              <People />{" "}
            </div>
          </div>
          <div
            style={{
              flex: ".4",
              fontWeight: "600",
              fontSize: "1.5em",
              textAlign: "center",
            }}
          >
            {" "}
            50{" "}
          </div>
          <div style={{ flex: ".4" }}>
            {" "}
            {/* <SparkLine />{" "} */}
            <AvatarGroup total={50}>
              <Avatar
                sx={{ width: 28, height: 28 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{ width: 28, height: 28 }}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
              <Avatar
                sx={{ width: 28, height: 28 }}
                alt="Agnes Walker"
                src="/static/images/avatar/4.jpg"
              />
              <Avatar
                sx={{ width: 28, height: 28 }}
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
        </Box>

        <GropedBarGraph />

        {/* <Box
          sx={{
            width: "13vw",
            height: "23vh",
            background: "whitesmoke",
            borderRadius: "8%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: ".2", display: "flex" }}>
            <div style={{ flex: ".8" }}> Expense </div>
            <div style={{ flex: ".2" }}>
              {" "}
              <Moving sx={{ color: "red" }} />{" "}
            </div>
          </div>
          <div style={{ flex: ".4", fontWeight: "600" }}> $ 52,000 </div>
          <div style={{ flex: ".4" }}>
            {" "}
            <SparkLine />{" "}
          </div>
        </Box>

        <Box
          sx={{
            width: "13vw",
            height: "23vh",
            background: "whitesmoke",
            borderRadius: "8%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: ".2", display: "flex" }}>
            <div style={{ flex: ".8" }}> Income </div>
            <div style={{ flex: ".2" }}>
              {" "}
              <TrendingDown sx={{ color: "green" }} />{" "}
            </div>
          </div>
          <div style={{ flex: ".4", fontWeight: "600" }}> $ 122,000 </div>
          <div style={{ flex: ".4" }}>
            {" "}
            <SparkLine />{" "}
          </div>
        </Box> */}
      </div>
    </div>
  );
};

export default PropertyOverview;
