import React from "react";
import {
  AddLocation,
  Apartment,
  Assignment,
  Book,
  MoreVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  setPropertyDetailsAddress,
  setPropertyDetailsAvailableUnits,
  setPropertyDetailsImages,
  setPropertyDetailsKey,
  setPropertyDetailsName,
  setPropertyDetailsNumberOfUnits,
} from "../../../app/features/propertyDetailsSlice";

const PropertyTableRow = ({
  name,
  address,
  propertyType,
  numberOfUnits,
  availableUnits,
  propertyKey,
}) => {
  // styles
  const cellStyle = {
    // border: "1px solid rgb(190, 190, 190)",
    padding: "5px 10px",
  };
  const dividerStyle = {
    borderLeft: "1px solid black",
    height: "100%",
    margin: "0 20px",
  };
  const dispatch = useDispatch();
  //   Navigation
  const navigate = useNavigate();
  // function to navigate to  PropertyDetail Screen
  const handleNavigateToPropertyDetail = async (
    name,
    address,
    numberOfUnits,
    availableUnits,
    key,
    images
  ) => {
    await dispatch(setPropertyDetailsName(name));
    await dispatch(setPropertyDetailsAddress(address));
    await dispatch(setPropertyDetailsNumberOfUnits(numberOfUnits));
    await dispatch(setPropertyDetailsAvailableUnits(availableUnits));
    await dispatch(setPropertyDetailsKey(key));
    await dispatch(setPropertyDetailsImages(images));
    // navigate to the details screen
    // navigate(`/propertyDetails/:${key}`);
    console.log(`${key} has been clicked`);
  };
  return (
    <tr
      onClick={() =>
        handleNavigateToPropertyDetail(
          name,
          address,
          numberOfUnits,
          availableUnits,
          propertyKey
        )
      }
    >
      <th style={cellStyle} scope="row">
        {/* ============== Property ==========*/}
        <div className="property">
          <div>
            <IconButton>
              <Assignment />
            </IconButton>
          </div>
          <div>
            <div>{name}</div>
            <div>
              <div className="location">
                <div>
                  <AddLocation />
                </div>
                <div>{address}</div>
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
          <div>{propertyType}</div>
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
          <div>{numberOfUnits}</div>
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
          <div>{availableUnits}</div>
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
      <td>{propertyKey}</td>
    </tr>
  );
};

export default PropertyTableRow;
