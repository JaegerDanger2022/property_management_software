import React, { useEffect, useRef, useState } from "react";
// redux
import { useSelector } from "react-redux";
import {
  property_address,
  property_availableUnits,
  property_date_added,
  property_images,
  property_key,
  property_name,
  property_numberOfUnits,
} from "../../../../app/features/propertyDetailsSlice";
// components
import { Alert, Button, Snackbar, Typography, useTheme } from "@mui/material";
// import { AddTenantToPropertyModal } from "../modals/AddTenantToPropertyModal";
// firebase
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../app/utils/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../app/utils/firebaseConfig";
// uuid
import { v4 } from "uuid";
// validation
import { validatePhoneNumber } from "../../../../app/utils/validations/validations";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { AddTenantToPropertyModal } from "../../../modals/AddTenant/AddTenantToPropertyModal";
import { Add, ArrowBackIos } from "@mui/icons-material";
// router
import { useNavigate } from "react-router";
import dayjs from "dayjs";

function PropertyDetails({}) {
  // TEMPORAL OWNER ID -- USE A REAL ONE FOR PRODUCTION
  const ownerid = "testUser";
  //   navigation
  const navigate = useNavigate();

  const theme = useTheme();
  // get the details of the property
  const name = useSelector(property_name);
  const address = useSelector(property_address);
  const numberOfUnits = useSelector(property_numberOfUnits);
  const availableUnits = useSelector(property_availableUnits);
  const key = useSelector(property_key);
  const date_added = useSelector(property_date_added);
  const images = useSelector(property_images);

  //   alert state
  //   allFieldsRequiredAlert
  const [allFieldsRequiredAlert, setAllFieldsRequiredAlert] = useState(false);
  //   function to close allFieldsRequiredAlert
  const handleCloseAllFieldsRequiredAlert = () => {
    setAllFieldsRequiredAlert(false);
  };
  // tenantPhoneNumberError alert
  const [tenantPhoneNumberError, setTenantPhoneNumberError] = useState(false);
  // tenantECPhoneNumberError alert
  const [tenantECPhoneNumberError, setTenantECPhoneNumberError] =
    useState(false);

  //   Add tenant
  //   tenant unique id
  const [tenantid, setTenantid] = useState(v4);
  // Personal Information states
  const [tenantFullName, setTenantFullName] = useState("");
  const [tenantDOB, setTenantDOB] = useState("");
  const handleAddDOB = (newValue) => {
    const formattedDate = newValue.format("DD-MM-YYYY");
    setTenantDOB(formattedDate);
  };
  //   Contact information (address, phone number, email)
  const [tenantAddress, setTenantAddress] = useState("");
  const [tenantPhoneNumber, setTenantPhoneNumber] = useState("");
  //   Emergency Contact Information (EC)
  const [tenantECName, setTenantECName] = useState("");
  const [tenantECRelationship, setTenantECRelationship] = useState("");
  const [tenantECPhoneNumber, setTenantECPhoneNumber] = useState("");
  // Employment and Income:
  const [tenantOccupation, setTenantOccupation] = useState("");
  const [tenantPlaceOfWork, setTenantPlaceOfWork] = useState("");
  // Financial Information
  const [tenantAccountInfo, setTenantAccountInfo] = useState("");
  //Security Deposit
  const [tenantSecurityDeposit, setTenantSecurityDeposit] = useState(0);
  // Lease Agreement file url
  const [tenantLeaseAgreementUrl, settenantLeaseAgreementUrlUrl] = useState([]);
  //   state to store selected files
  const [selectedFiles, setSelectedFiles] = useState([]);
  //   number of units to occupy
  const [tenantUnitsToOccuppy, setTenantUnitsToOccuppy] = useState(0);
  //   number of dependants
  const [tenantDependents, setTenantDependents] = useState(0);

  //   addTenant Modal handlers
  const [addTenantModalOpen, setAddTenantModalOpen] = useState(false);
  const handleTenantModalClose = () => {
    setAddTenantModalOpen(false);
  };

  // validations useeffect
  useEffect(() => {
    const validations = () => {
      //   validate phone numbers
      if (!validatePhoneNumber(tenantPhoneNumber) && tenantPhoneNumber !== "") {
        setTenantPhoneNumberError(true);
      } else {
        setTenantPhoneNumberError(false);
      }
      if (
        !validatePhoneNumber(tenantECPhoneNumber) &&
        tenantECPhoneNumber !== ""
      ) {
        setTenantECPhoneNumberError(true);
      } else {
        setTenantECPhoneNumberError(false);
      }
    };
    validations();
  }, [
    tenantSecurityDeposit,
    tenantPhoneNumber,
    tenantECPhoneNumber,
    tenantUnitsToOccuppy,
    tenantDependents,
  ]);

  //   function to sublit the tenant info
  const handleSubmitTenantInfo = async () => {
    console.log("sent");

    if (
      tenantFullName === "" ||
      tenantAddress === "" ||
      tenantDOB === "" ||
      tenantECName === "" ||
      tenantPhoneNumber === "" ||
      tenantECPhoneNumber === "" ||
      tenantECRelationship === "" ||
      tenantSecurityDeposit === "" ||
      tenantAccountInfo === "" ||
      tenantOccupation === "" ||
      tenantPlaceOfWork === "" ||
      tenantUnitsToOccuppy === "" ||
      tenantDependents === ""
    ) {
      // trigger alert
      setAllFieldsRequiredAlert(true);
      // reduce the
    } else if (validatePhoneNumber(tenantPhoneNumberError)) {
      setTenantPhoneNumberError(true);
    } else if (validatePhoneNumber(tenantECPhoneNumberError)) {
      setTenantECPhoneNumberError(true);
    } else {
      // upload files
      try {
        const selectedFilesArray = [];

        if (selectedFiles.length > 10) {
          // setMaximumPicturesAlert(true);
          console.log("too many files added");
        } else {
          for (let i = 0; i < selectedFiles.length; i++) {
            const selectedFile = selectedFiles[i];

            // upload the image to google storage
            const leaseAgreementRef = ref(
              storage,
              `leaseAgreement/${ownerid}/${selectedFile.name}`
            );

            uploadBytes(leaseAgreementRef, selectedFile).then((snapshot) => {
              // setUploadComplete(true);
              // Get the download URL of the uploaded image -- read/write count 2
              getDownloadURL(snapshot.ref).then((url) => {
                // save image to be displayed
                selectedFilesArray.push(url);
              });
            });
            // setIsLoading(false);
          }
          // save to file state
          settenantLeaseAgreementUrlUrl(selectedFilesArray);
          //   empty all states
          setTenantFullName("");
          setTenantAddress("");
          setTenantPhoneNumber("");
          setTenantECName("");
          setTenantECRelationship("");
          setTenantECPhoneNumber("");
          setTenantOccupation("");
          setTenantPlaceOfWork("");
          setTenantAccountInfo("");
          setTenantSecurityDeposit("");
          settenantLeaseAgreementUrlUrl([]);
          setSelectedFiles([]);
          setTenantUnitsToOccuppy("");
          setTenantDependents("");
          // close modal
          setAddTenantModalOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
      // save the tenants details
      try {
        const tenantDocRef = doc(
          db,
          `user_data/${ownerid}/tenants`,
          `${tenantid}`
        );
        await setDoc(tenantDocRef, {
          tenantFullName: tenantFullName,
          tenantDOB: tenantDOB,
          tenantAddress: tenantAddress,
          tenantPhoneNumber: tenantPhoneNumber,
          tenantECName: tenantECName,
          tenantECRelationship: tenantECRelationship,
          tenantECPhoneNumber: tenantECPhoneNumber,
          tenantOccupation: tenantOccupation,
          tenantPlaceOfWork: tenantPlaceOfWork,
          tenantAccountInfo: tenantAccountInfo,
          tenantSecurityDeposit: tenantSecurityDeposit,
          tenantLeaseAgreementUrl: tenantLeaseAgreementUrl,
          tenantUnitsToOccuppy: tenantUnitsToOccuppy,
          tenantDependents: tenantDependents,
          propertyName: name,
          propertyKey: key,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {/* add tenant button */}
      <div>
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIos />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionButton
            label={"Add Tenant"}
            startIcon={<Add />}
            handleAction={() => setAddTenantModalOpen(true)}
          />
        </div>
      </div>
      <div
        className="propertyDetailsScreen"
        style={{ display: "grid", gridTemplateColumns: "9fr 3fr" }}
      >
        <div className="propertyDetails">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2vw",
            }}
          >
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Property name:</strong>
              {name}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Property Address:</strong>
              {address}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Number of Units:</strong>
              {numberOfUnits}
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "1.3rem" }}
            >
              <strong>Available Units:</strong>
              {availableUnits}
            </Typography>
          </div>
          {/* display the others */}
          {images.map((imageSrc) => (
            <img
              key={imageSrc}
              src={imageSrc}
              style={{ width: "30dvw", height: "30dvh", padding: "1dvw" }}
            />
          ))}
        </div>
        <div className="propertyDetailsAddTenant">
          <Typography sx={{ color: theme.palette.text.primary }} variant="h5">
            <strong> All Tenants</strong>
          </Typography>
          <Button
            variant="contained"
            onClick={() => setAddTenantModalOpen(true)}
          >
            Add Tenant
          </Button>
          <AddTenantToPropertyModal
            addTenantModalOpen={addTenantModalOpen}
            handleTenantModalClose={handleTenantModalClose}
            handleSubmitTenantInfo={handleSubmitTenantInfo}
            tenantFullName={tenantFullName}
            setTenantFullName={(e) => {
              setTenantFullName(e.target.value);
            }}
            tenantDOB={tenantDOB}
            // setTenantDOB={(e) => setTenantDOB(e.target.value)}
            handleAddDOB={handleAddDOB}
            tenantAddress={tenantAddress}
            setTenantAddress={(e) => setTenantAddress(e.target.value)}
            tenantPhoneNumber={tenantPhoneNumber}
            setTenantPhoneNumber={(e) => setTenantPhoneNumber(e.target.value)}
            tenantECName={tenantECName}
            setTenantECName={(e) => setTenantECName(e.target.value)}
            tenantECRelationship={tenantECRelationship}
            setTenantECRelationship={(e) =>
              setTenantECRelationship(e.target.value)
            }
            tenantECPhoneNumber={tenantECPhoneNumber}
            setTenantECPhoneNumber={(e) =>
              setTenantECPhoneNumber(e.target.value)
            }
            tenantOccupation={tenantOccupation}
            setTenantOccupation={(e) => setTenantOccupation(e.target.value)}
            tenantPlaceOfWork={tenantPlaceOfWork}
            setTenantPlaceOfWork={(e) => setTenantPlaceOfWork(e.target.value)}
            tenantAccountInfo={tenantAccountInfo}
            setTenantAccountInfo={(e) => setTenantAccountInfo(e.target.value)}
            tenantSecurityDeposit={tenantSecurityDeposit}
            setTenantSecurityDeposit={(e) =>
              setTenantSecurityDeposit(parseInt(e.target.value))
            }
            tenantUnitsToOccuppy={tenantUnitsToOccuppy}
            setTenantUnitsToOccuppy={(e) =>
              setTenantUnitsToOccuppy(parseInt(e.target.value))
            }
            tenantDependents={tenantDependents}
            setTenantDependents={(e) =>
              setTenantDependents(parseInt(e.target.value))
            }
            tenantPhoneNumberError={tenantPhoneNumberError}
            tenantECPhoneNumberError={tenantECPhoneNumberError}
            // lease agreement file props
            setSelectedFiles={setSelectedFiles}
          />
        </div>
        {/* all fields required alert */}
        <Snackbar
          open={allFieldsRequiredAlert}
          autoHideDuration={6000}
          onClose={handleCloseAllFieldsRequiredAlert}
        >
          <Alert severity="error">All fields are required</Alert>
        </Snackbar>
      </div>
    </div>
  );
}
export default PropertyDetails;
