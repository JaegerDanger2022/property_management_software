// REACT
import React, { useEffect, useRef, useState } from "react";
// MATERIAL UI
import {
  Alert,
  Box,
  Fade,
  IconButton,
  ListSubheader,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Add, AddAPhoto, Close } from "@mui/icons-material";
// CUSTOM COMPONENTS
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import ActionButton from "../../components/ActionButton/ActionButton";
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
import { useForm } from "react-hook-form";

function AddPropertyModal({}) {
  // react-hook form config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const theme = useTheme();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // get userid
  // const userid = useSelector()

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [availableUnits, setAvailableUnits] = useState(0);
  const [propertyType, setPropertyType] = useState([]);

  // Images States
  const [fileName, setFileName] = useState([]);
  const [file, setFile] = useState([]);

  //image display state
  const [imageDisplay, setImageDisplay] = useState([]);
  // selected images array to be sent to the db
  const [propertyImages, setPropertyImages] = useState([]);
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);

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
  // change the handleaction buttin to onSubmit and used react-hook forms for validataion and collecting of data from the textfields
  const onSubmit = async (formData) => {
    console.log(numberOfUploads);

    const { PropertyName, Address, NumberOfUnits, AvailableUnits } = formData;

    console.log(
      PropertyName,
      Address,
      NumberOfUnits,
      AvailableUnits,
      "Useform"
    );
    // if (numberOfUploads < 1) {

    // } else {
    //   console.log("you have exceeded the limit");
    // }
    try {
      if (
        PropertyName === "" ||
        Address === "" ||
        NumberOfUnits === 0 ||
        AvailableUnits === 0 ||
        propertyType.length === 0 ||
        file.length === 0
      ) {
        setEmptyFieldsAlert(true);
      } else {
        // setAddPropertyOpen(false);
        //************* Note for Jaeger(Martin) ..SetAddPropertyOpen(false) is supposed to do but i presume it is to turn off so modal so i used the revised handleclose function which basically turns the modal state to false  ******************
        handleClose();

        const propertyRef = doc(
          db,
          `user_data/testUser/properties`,
          `${randomDocName}`
        );

        await setDoc(propertyRef, {
          name: PropertyName,
          address: Address,
          numberOfUnits: NumberOfUnits,
          availableUnits: AvailableUnits,
          propertyType: propertyType,
          propertyImages: fileName,
          key: randomDocName,
        });

        // uploadFiles Here
        for (let i = 0; i < file.length; i++) {
          const selectedFile = file[i];
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
              file.push(url);
            });
          });
          setIsLoading(false);
        }

        // update the numberOfUploads field
        const numberOfUploadsRef = doc(db, `user_data`, `testUser`);
        await updateDoc(numberOfUploadsRef, {
          numberOfUploads: increment(1),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function to upload images
  // const handleFileChange = async (event) => {
  //   const selectedFiles = event.target.files;
  //   const selectedFilesArray = [];
  //   if (selectedFiles.length > 10) {
  //     setMaximumPicturesAlert(true);
  //   } else {
  //     // for (let i = 0; i < selectedFiles.length; i++) {
  //     //   const selectedFile = selectedFiles[i];
  //     //   // upload the image to google storage
  //     //   const profileImageRef = ref(
  //     //     storage,
  //     //     `buildingimages/test/${selectedFile.name}`
  //     //   );
  //     //   uploadBytes(profileImageRef, selectedFile).then((snapshot) => {
  //     //     setUploadComplete(true);
  //     //     // Get the download URL of the uploaded image -- read/write count 2
  //     //     getDownloadURL(snapshot.ref).then((url) => {
  //     //       // save image to be displayed
  //     //       selectedFilesArray.push(url);
  //     //     });
  //     //   });
  //     //   setIsLoading(false);
  //     // }
  //     // setImageDisplay(selectedFilesArray);
  //     // setPropertyImages(selectedFilesArray);
  //   }
  // };

  // Functions for dragging image to the upload image box

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    setFile([...file, ...files], "files");
    const fileNames = [];

    if (file.length > 10) {
      setMaximumPicturesAlert(true);
    } else {
      for (let i = 0; i < files.length; i++) {
        // Getting a new id for each file
        // const fileId = v4();
        fileNames.push({
          name: files[i].name,
          size: files[i].size,
          // fileId: fileId,
          lastModified: files[i].lastModified,
          description: "",
          url: URL.createObjectURL(files[i]),
        });
      }

      // setFile([...file, ...files], "files");
      setFileName([...fileName, ...fileNames], "names");
      console.log(fileName, "Names", file);
    }
  };

  // DELETE Image selected
  const handleRemoveImageSelected = (index) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);

    const updatedFileNames = [...fileName];
    updatedFileNames.splice(index, 1);
    setFileName(updatedFileNames);
    console.log(file, "left");
  };

  const handleFileSelect = async (event) => {
    const files = event.target.files;
    const fileNames = [];
    console.log(files[0].name);
    await setFile([...file, ...files], "files");

    console.log(files, "SElECTEDF", file);

    // I have to FIX THIS validation to optimize it use when the 10 files are not selected ata t time
    if (file.length > 10 || files.length >= 9) {
      setMaximumPicturesAlert(true);
      // if (file.length < 10) {
      //   ("Do nothing");
      // } else {
      //   setFile([]);
      // }
    } else {
      for (let i = 0; i < files.length; i++) {
        // const fileId = v4();
        fileNames.push({
          name: files[i].name,
          size: files[i].size,
          // fileId: fileId,
          lastModified: files[i]["lastModified"],
          description: "",
          url: URL.createObjectURL(files[i]),
        });
      }

      // setFile([...file, ...files], "files");
      setFileName([...fileName, ...fileNames], "names");
      console.log(fileName, "Names", file);
    }
  };

  useEffect(() => {
    console.log("NNA", file, fileName);
  }, [file, fileName]);

  useEffect(() => {
    console.log(
      "formInfo",
      name,
      address,
      numberOfUnits,
      availableUnits,
      propertyType,
      file
    );
  }, [name, address, numberOfUnits, availableUnits, propertyType, file]);

  return (
    <>
      <ActionButton
        label={"Add Property"}
        startIcon={<Add />}
        handleAction={handleOpen}
      />

      <Modal
        sx={{ display: "grid", placeContent: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <Box
            className="ModalBox"
            sx={{
              width: "50dvw",
              minHeight: "85vh",
              borderRadius: "1%",
              padding: "2.5% 4% 2.5% 4%",
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flex: ".19" }}>
              {" "}
              <h1>Add a property</h1>{" "}
            </Box>

            <Box sx={{ flex: ".81", display: "flex" }}>
              {/* <form> */}{" "}
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  flex: ".5",
                  paddingTop: "1%",
                  paddingBottom: "1%",
                  // paddingRight: "1%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5%",
                }}
              >
                {/* Form */}
                <TextField
                  id="outlined-basic"
                  label="Property Name"
                  variant="outlined"
                  required
                  {...register("PropertyName", { required: true })}
                  // value={name}
                  // onchange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  required
                  {...register("Address", { required: true })}
                  // value={address}
                  // onchange={(e) => setAddress(e.target.value)}
                />

                <Select
                  sx={{ color: "black" }}
                  value={propertyType}
                  required
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
                            // color: "white",
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

                <TextField
                  id="outlined-basic"
                  label="Number of units"
                  variant="outlined"
                  required
                  type="number"
                  {...register("NumberOfUnits", { required: true })}

                  // value={numberOfUnits}
                  // onchange={(e) => {
                  //   const numberOfUnits = Math.round(e.target.value);
                  //   // Convert the rounded value to an integer.
                  //   const numberOfUnitsInt = parseInt(numberOfUnits);
                  //   setNumberOfUnits(numberOfUnitsInt);
                  //   if (numberOfUnits === 0) {
                  //     setNumberOfUnits("");
                  //   }
                  // }}
                />
                <TextField
                  label="Available units"
                  id="outlined-basic"
                  variant="outlined"
                  type="number"
                  required
                  // required
                  {...register("AvailableUnits", { required: true })}

                  // onchange={(e) => {
                  //   const availableUnits = Math.round(e.target.value);
                  //   // Convert the rounded value to an integer.
                  //   const availableUnitsInt = parseInt(availableUnits);
                  //   setAvailableUnits(availableUnitsInt);
                  //   if (availableUnits === 0) {
                  //     setAvailableUnits("");
                  //   }
                  // }}
                />
                <ActionButton
                  label="Submit"
                  type="submit"
                  // handleAction={handleAction}
                />
              </form>{" "}
              {/* </form> */}
              <div style={{ flex: ".5", paddingLeft: "2%" }}>
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
                    marginBottom: "3%",
                  }}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
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
                    <Typography sx={{ fontWeight: "600" }}>
                      Select or drag Images here
                    </Typography>
                  </div>

                  {/* ref input */}
                  <div>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      multiple
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      // onChange={handleFileChange}
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>

                {fileName.length === 0 ? "" : <h3>Property Images:</h3>}
                {/* "blob:http://localhost:5173/3971c08d-8a75-4910-8bf2-406713d1a902" */}

                <div
                  style={{
                    width: "100%",
                    // backgroundColor: "red",
                    display: "flex",
                    flexWrap: "wrap",
                    // gap: "9%",
                    height: "35vh",
                    overflowY: "scroll",
                  }}
                >
                  {fileName.map((data, i) => (
                    <div
                      style={{
                        width: "9vw",
                        height: "15vh",
                        backgroundImage: `url(${data.url})`,
                        backgroundSize: "cover",
                        borderRadius: "5%",
                        marginBottom: "1%",
                        marginRight: "1.65vw",
                      }}
                      // key={index}
                    >
                      <IconButton
                        onClick={() => {
                          handleRemoveImageSelected(i);
                          // alert(`clicked ${i}`);
                        }}
                        sx={{
                          postion: "absolute",
                          width: 20,
                          height: 20,
                          color: "red",
                          // backgroundColor: "white",
                          left: "9vw",
                        }}
                      >
                        <Close />
                      </IconButton>
                    </div>
                  ))}
                </div>
                {/* {isLoading && <Typography variant="h1">LOADING</Typography>}
                <div style={{ display: "flex", gap: "1vw" }}>
                  {imageDisplay.map((item) => (
                    <SelectedImages item={item} />
                  ))}
                </div> */}
              </div>
            </Box>

            {/* ==========  SNACKBARS FOR GIVING VALIDATION ALERTS ======= */}

            <Snackbar
              open={maximumPicturesAlert}
              autoHideDuration={6000}
              onClose={handleMaximumPicturesAlert}
            >
              <Alert severity="error">Only 10 images are allowed</Alert>
            </Snackbar>

            {/* empty fields alert */}
            <Snackbar
              open={emptyFieldsAlert}
              autoHideDuration={6000}
              onClose={handleEmptyAlertClose}
            >
              <Alert severity="error">All fields are required</Alert>
            </Snackbar>

            {/* <Typography variant="h5">Property Types</Typography> */}
            {/* Name Address Property type units available units selectedImages */}
            {/* <Box
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10vh",
              }}
            >
              <ActionButton label="Submit" handleAction={handleAction} />
            </Box> */}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AddPropertyModal;
