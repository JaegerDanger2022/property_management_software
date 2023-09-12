import {
  Add,
  AddAPhoto,
  Cancel,
  Close,
  Description,
  PictureAsPdf,
} from "@mui/icons-material";
import {
  Button,
  Card,
  Fade,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ActionButton from "../../components/ActionButton/ActionButton";
import {
  property_address,
  property_name,
} from "../../../app/features/propertyDetailsSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const AddTenantToPropertyModal = ({
  // addTenantModalOpen,
  tenantFullName,
  setTenantFullName,
  tenantDOB,
  // setTenantDOB,
  handleAddDOB,
  tenantAddress,
  setTenantAddress,
  tenantPhoneNumber,
  setTenantPhoneNumber,
  tenantECName,
  setTenantECName,
  tenantECRelationship,
  setTenantECRelationship,
  tenantECPhoneNumber,
  setTenantECPhoneNumber,
  tenantOccupation,
  setTenantOccupation,
  tenantPlaceOfWork,
  setTenantPlaceOfWork,
  tenantAccountInfo,
  setTenantAccountInfo,
  tenantSecurityDeposit,
  setTenantSecurityDeposit,
  // handleTenantModalClose,
  handleSubmitTenantInfo,
  tenantUnitsToOccuppy,
  setTenantUnitsToOccuppy,
  tenantDependents,
  setTenantDependents,
  tenantPhoneNumberError,
  tenantECPhoneNumberError,

  // saving files
  setSelectedFiles,
}) => {
  // CONFIG FOR  REACT-HOOK-FORMS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // TEMPORAL OWNER ID
  const ownerid = "test";

  // redux states for selected property name and address
  const propertyName = useSelector(property_name);
  const propertyAddress = useSelector(property_address);

  const theme = useTheme();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // handle file upload
  const fileInputRef = useRef(null);

  //
  // Images States
  // chnage the FileName array's name to a more descriptive name.. it is tht array which will be modified with its own fileid , userWhoUploaded it and the online web storage url
  const [fileName, setFileName] = useState([]);

  // change the file array's name to a more descroptive name ... it is the original array of the files devoid of any modifications
  const [file, setFile] = useState([]);

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

  const onSubmit = (formData) => {
    alert("this is where your submit function will be after validation done");

    const {
      FullName,
      Address,
      PhoneNumber,
      UnitsToBeOccupied,
      NumberOfDependants,
      Occupation,
      PlaceOfWork,
      EmergencyContactName,
      EmergencyPhoneNumber,
      EmergencyContactRelationship,
      AccountInfo,
      SecurityDepost,
    } = formData;

    console.log(
      "FORMData",
      FullName,
      Address,
      PhoneNumber,
      UnitsToBeOccupied,
      NumberOfDependants,
      Occupation,
      PlaceOfWork,
      EmergencyContactName,
      EmergencyPhoneNumber,
      EmergencyContactRelationship,
      AccountInfo,
      SecurityDepost
    );
  };

  // function to select files
  // const handleFileChange = async (event) => {
  //   const selectedFiles = event.target.files;
  //   setSelectedFiles(event.target.files);
  //   // save file names to uploadedfiles state
  //   setUploadedFiles(Object.values(selectedFiles));
  // };
  return (
    <>
      <ActionButton
        label={"Add Tenant"}
        startIcon={<Add />}
        handleAction={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Fade in={open}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: "85vw",
              borderRadius: "1%",
              height: "94vh",
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              display: "flex",
              flexDirection: "column",

              paddingBottom: "1.5%",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              // overflow: "scroll",
            }}
          >
            <div style={{ flex: "0.1" }}>
              <h1>
                Add a tenant to : {propertyName}
                <span style={{ fontSize: ".6em" }}> {propertyAddress} </span>
              </h1>
            </div>
            <div style={{ flex: "0.82", display: "flex" }}>
              <div style={{ flex: ".33" }}>
                <h2> Personal Information </h2>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                  required
                  {...register("FullName", { required: true })}
                />

                <DatePicker
                  label="Date of birth"
                  value={dayjs(tenantDOB)}
                  onChange={handleAddDOB}
                  sx={{ width: 300, marginBottom: "3%" }}
                  slotProps={{
                    textField: {
                      size: "small",
                      // helperText: "Please fill this field",
                    },
                  }}
                  // We can use the phrase below for the dateofbirths validation but i think we should use the vaulue from the dayjs as validation in the onsubmit function
                  // {...register("DataOfBirth", { required: true })}
                  // maxDate={dayjs()}
                />

                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  required
                  {...register("Address", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  required
                  {...register("PhoneNumber", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Units to be Occupied"
                  variant="outlined"
                  type="number"
                  required
                  {...register("UnitsToBeOccupied", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />

                <h2>Dependants</h2>
                <TextField
                  id="outlined-basic"
                  label="Number of dependants"
                  variant="outlined"
                  type="number"
                  required
                  {...register("NumberOfDependants", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
              </div>
              <div style={{ flex: ".34" }}>
                <h2> Employment and Income:</h2>
                <TextField
                  id="outlined-basic"
                  label="Occupation"
                  variant="outlined"
                  // Maybe it will not be required
                  required
                  {...register("Occupation", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Place of Work"
                  required
                  {...register("PlaceOfWork", { required: true })}
                  variant="outlined"
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />

                <h2> Emergency Contact Information*</h2>
                <TextField
                  id="outlined-basic"
                  label="Contact Name"
                  variant="outlined"
                  required
                  {...register("EmergencyContactName", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="PhoneNumber"
                  variant="outlined"
                  required
                  {...register("EmergencyPhoneNumber", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Relationship"
                  variant="outlined"
                  required
                  {...register("EmergencyPhoneNumber", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
              </div>

              <div style={{ flex: ".33" }}>
                <h2> Financial Information</h2>
                <TextField
                  id="outlined-basic"
                  label="Account Info"
                  variant="outlined"
                  required
                  {...register("AccountInfo", { required: true })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Security Depost"
                  variant="outlined"
                  type="number"
                  // Intentionally left it as not required you can change it
                  {...register("SecurityDepost", { required: false })}
                  size="small"
                  sx={{ width: 300, marginBottom: "3%" }}
                />
                {/* LEASE AGREEMENT UPLOAD BOX */}
                <div
                  className="select-image"
                  style={{
                    border: "2px dotted",
                    borderColor: theme.palette.primary.main,
                    width: "22.5dvw",
                    height: "10dvh",
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    marginBottom: "3vh",
                    cursor: "pointer",
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
                    <Typography> Select or drag Lease Agreement</Typography>
                  </div>

                  {/* ref input */}
                  <div>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .gif, .txt, .pdf, .doc, .docx"
                      multiple
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>
                {/* END LEASE AGREEMENT UPLOAD BOX */}
                <div
                  style={{
                    height: "30vh",
                    // background: "green",
                    overflowY: "scroll",
                  }}
                >
                  {fileName.map((item, key) => (
                    <div
                      style={{ display: "flex", flexDirection: "row" }}
                      key={key}
                    >
                      <Card
                        sx={{
                          width: "20vw",
                          height: "6.3vh",
                          // backgroundColor: "red",
                          display: "flex",
                          marginBottom: "2.5%",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{ flex: "0.16" }}
                          onClick={() => {
                            window.open(item.url, "_blank");
                          }}
                        >
                          {item.name.includes("pdf") ? (
                            <PictureAsPdf
                              sx={{ marginTop: "1.5vh", marginLeft: ".6vw" }}
                            />
                          ) : (
                            <Description
                              sx={{ marginTop: "1.5vh", marginLeft: ".6vw" }}
                            />
                          )}
                        </div>
                        <div
                          style={{ flex: "0.64", textOverflow: "ellipsis" }}
                          onClick={() => {
                            window.open(item.url, "_blank");
                          }}
                        >
                          <div style={{ marginTop: "1.5vh", float: "left" }}>
                            {item.name}
                          </div>
                        </div>
                        <div style={{ flex: "0.2" }}>
                          <IconButton
                            onClick={() => {
                              handleRemoveImageSelected(key);
                            }}
                          >
                            <Cancel />
                          </IconButton>
                        </div>
                      </Card>

                      <Typography></Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "0.08",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActionButton label="Submit" type="submit" width={"40vw"} />
            </div>
          </form>
        </Fade>
      </Modal>
    </>
  );
};
