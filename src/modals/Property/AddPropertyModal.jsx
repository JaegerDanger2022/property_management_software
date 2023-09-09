// REACT
import React, { useEffect, useRef, useState } from "react";
// MATERIAL UI
import {
  Alert,
  Box,
  Fade,
  ListSubheader,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
// CUSTOM COMPONENTS
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { SelectedImages } from "../../components/AddProperty Components/SelectedImages";
import properties from "./PropertyTypeDataset/PropertyTypes";
// ROUTER
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
// REDUX
import { useSelector } from "react-redux";
// Firebase
import { db, storage } from "../../../app/utils/firebaseConfig";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const AddPropertyModal = ({
  addPropertyOpen,
  handleAddPropertyClose,
}) => {
  const theme = useTheme();

  const navigate = useNavigate();
  // get userid
  // const userid = useSelector()

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [availableUnits, setAvailableUnits] = useState(0);
  const [propertyType, setPropertyType] = useState([]);

  //image display state
  const [imageDisplay, setImageDisplay] = useState([]);
  // selected images array to be sent to the db
  const [propertyImages, setPropertyImages] = useState([]);
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);

  // image format alert state
  const [incorrectImageFormat, setIncorrectImageFormat] = useState(false);
  // alert close function
  const handleClose = () => {
    setIncorrectImageFormat(false);
  };

  // empty fields alert
  const [emptyFieldsAlert, setEmptyFieldsAlert] = useState(false);
  // exceeded maximum pictures alert
  const [maximumPicturesAlert, setMaximumPicturesAlert] = useState(false);
  // image format alert state
  const [uploadComplete, setUploadComplete] = useState(false);
  // alert close function
  const handleEmptyAlertClose = () => {
    setEmptyFieldsAlert(false);
  };
  // alert to close maximumPicturesAlert
  const handleMaximumPicturesAlert = () => {
    setMaximumPicturesAlert(false);
  };
  // alert close function
  const handleCloseUploadComplete = () => {
    setUploadComplete(false);
  };

  // const handleDeleteImage = (item) => {
  //   const updatedImageDisplay = imageDisplay.filter((image) => image !== item);
  //   setImageDisplay(updatedImageDisplay);
  // };

  // handle file upload
  const fileInputRef = useRef(null);
  // loading state
  const [isLoading, setIsLoading] = useState(false);

  const [numberOfUploads, setNumberOfUploads] = useState();
  useEffect(() => {
    const getNumberOfUploads = async () => {
      // update the numberOfUploads field
      const numberOfUploadsRef = doc(db, `user_data`, `testUser`);
      const numberOfUploadsSnap = await getDoc(numberOfUploadsRef);

      const numberOfUploadsDoc = await numberOfUploadsSnap.data()
        .numberOfUploads;
      setNumberOfUploads(numberOfUploadsDoc);
    };
    getNumberOfUploads();
  }, [numberOfUploads]);

  // handle submit
  const handleAction = async () => {
    console.log(numberOfUploads);
    // if (numberOfUploads < 1) {

    // } else {
    //   console.log("you have exceeded the limit");
    // }
    try {
      if (
        name === "" ||
        address === "" ||
        numberOfUnits === 0 ||
        availableUnits === 0 ||
        propertyType.length === 0 ||
        propertyImages.length === 0
      ) {
        setEmptyFieldsAlert(true);
      } else {
        const propertyRef = doc(
          db,
          `user_data/testUser/properties`,
          `${randomDocName}`
        );

        await setDoc(propertyRef, {
          name: name,
          address: address,
          numberOfUnits: numberOfUnits,
          availableUnits: availableUnits,
          propertyType: propertyType,
          propertyImages: propertyImages,
          key: randomDocName,
        });

        // update the numberOfUploads field
        const numberOfUploadsRef = doc(db, `user_data`, `testUser`);
        await updateDoc(numberOfUploadsRef, {
          numberOfUploads: increment(1),
        });
        // navigate
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = [];
    if (selectedFiles.length > 10) {
      setMaximumPicturesAlert(true);
    } else {
      for (let i = 0; i < selectedFiles.length; i++) {
        if (
          selectedFiles[i].type == "image/jpeg" ||
          selectedFiles[i].type == "image/jpg" ||
          selectedFiles[i].type == "image/png"
        ) {
          const selectedFile = selectedFiles[i];

          // upload the image to google storage
          const profileImageRef = ref(
            storage,
            `buildingimages/test/${selectedFile.name}`
          );

          uploadBytes(profileImageRef, selectedFile).then((snapshot) => {
            setUploadComplete(true);
            // Get the download URL of the uploaded image -- read/write count 2
            getDownloadURL(snapshot.ref).then((url) => {
              // save image to be displayed
              selectedFilesArray.push(url);
            });
          });
          setIsLoading(false);
        } else {
          setIncorrectImageFormat(true);
        }
      }
      setImageDisplay(selectedFilesArray);
      setPropertyImages(selectedFilesArray);
    }
  };

  return (
    <Modal
      sx={{ display: "grid", placeContent: "center" }}
      open={addPropertyOpen}
      onClose={handleAddPropertyClose}
    >
      <Fade in={addPropertyOpen}>
        <Box
          className="ModalBox"
          sx={{
            width: "70dvw",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h5">Property Types</Typography>

          <Box
            style={{
              display: "grid",
              // gridTemplateColumns: "repeat(2, 1fr)",
              color: theme.palette.text.primary,
              // alignItems: "center",
            }}
          >
            {/* Left column to get information */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1dvh",
              }}
            >
              {/* name */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Name</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    autoFocus={true}
                    value={name}
                    placeholder="Name"
                    onchange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Address */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Address</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={address}
                    placeholder="Address"
                    onchange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              {/* Property Type */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Property Type</Typography>
                </div>
                <div className="input-field">
                  <Select
                    sx={{ width: "20vw" }}
                    value={propertyType}
                    onChange={(event) => {
                      setPropertyType([event.target.value]);
                    }}
                    label="Property Type"
                  >
                    {properties.map((item, key) => {
                      if (item.header === true) {
                        return (
                          <ListSubheader
                            key={key}
                            sx={{
                              fontWeight: "bold",
                              backgroundColor: "#686868",
                              color: "white",
                            }}
                          >
                            {item.label}
                          </ListSubheader>
                        );
                      } else {
                        return (
                          <MenuItem key={key} value={item.label}>
                            {item.label}
                          </MenuItem>
                        );
                      }
                    })}
                  </Select>
                </div>
              </div>
              {/*Total  Number of units */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Units</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={numberOfUnits}
                    placeholder="Units"
                    onchange={(e) => {
                      const numberOfUnits = Math.round(e.target.value);
                      // Convert the rounded value to an integer.
                      const numberOfUnitsInt = parseInt(numberOfUnits);
                      setNumberOfUnits(numberOfUnitsInt);
                      if (numberOfUnits === 0) {
                        setNumberOfUnits("");
                      }
                    }}
                    onFocus={() => setNumberOfUnits("")}
                    type="number"
                  />
                </div>
              </div>
              {/*Available of units */}
              <div
                className="item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr",
                }}
              >
                <div className="label">
                  <Typography variant="body1">Available Units</Typography>
                </div>
                <div className="input-field">
                  <CustomTextField
                    value={availableUnits}
                    placeholder="Units"
                    onchange={(e) => {
                      const availableUnits = Math.round(e.target.value);
                      // Convert the rounded value to an integer.
                      const availableUnitsInt = parseInt(availableUnits);
                      setAvailableUnits(availableUnitsInt);
                      if (availableUnits === 0) {
                        setAvailableUnits("");
                      }
                    }}
                    onFocus={() => setAvailableUnits("")}
                    type="number"
                  />
                </div>
              </div>
              {/* Select Images */}
              <div
                className="select-image"
                style={{
                  border: "2px dotted",
                  borderColor: theme.palette.primary.main,
                  width: "20dvw",
                  height: "10dvh",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
                onClick={() => fileInputRef.current.click()}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "baseline",
                    gap: 10,
                  }}
                >
                  <AddAPhoto />
                  <Typography>Select Images</Typography>
                </div>

                {/* ref input */}
                <div>
                  <input
                    type="file"
                    multiple
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              {/* incorrect format alert */}
              <Snackbar
                open={incorrectImageFormat}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert severity="error">
                  Files can only be .jpeg, .jpg and .png formats
                </Alert>
              </Snackbar>
              {/* upload complete alert */}

              <Snackbar
                open={uploadComplete}
                autoHideDuration={6000}
                onClose={handleCloseUploadComplete}
              >
                <Alert severity="success">Uploaded</Alert>
              </Snackbar>

              {/* empty fields alert */}
              <Snackbar
                open={emptyFieldsAlert}
                autoHideDuration={6000}
                onClose={handleEmptyAlertClose}
              >
                <Alert severity="error">All fields are required</Alert>
              </Snackbar>
              {/* maximum pictures alert */}
              <Snackbar
                open={maximumPicturesAlert}
                autoHideDuration={6000}
                onClose={handleMaximumPicturesAlert}
              >
                <Alert severity="error">Only 10 images are allowed</Alert>
              </Snackbar>
            </Box>
            {/* Right column to get information */}
            <Box
              className="results"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5vh",
              }}
            >
              <Typography>Name: {name}</Typography>
              <Typography>Address: {address}</Typography>
              <Typography>Property Type: {propertyType}</Typography>
              <Typography>Total number of Units: {numberOfUnits}</Typography>
              <Typography>Available Units: {availableUnits}</Typography>

              <Typography>Pictures:</Typography>

              {isLoading && <Typography variant="h1">LOADING</Typography>}
              <div style={{ display: "flex", gap: "1vw" }}>
                {imageDisplay.map((item) => (
                  <SelectedImages item={item} />
                ))}
              </div>
            </Box>
            {/* submit button */}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10vh",
            }}
          >
            <ActionButton label="Submit" handleAction={handleAction} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
