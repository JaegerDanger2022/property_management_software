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
import { useTheme } from "@mui/material";
// import { AddTenantToPropertyModal } from "../modals/AddTenantToPropertyModal";
// firebase
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
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
import { Route, useNavigate, Routes } from "react-router";
import dayjs from "dayjs";
import { Box } from "@mui/system";
import PropertyMenuTab from "../../../components/Menu/SelectedPropertyMenuTab/PropertyMenuTab";

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
  // destructuring 2 images from images ..
  const [image1, image2] = images;

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

  //   state to hold all tenants in the property
  const [propertyTenants, setPropertyTenants] = useState([]);

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

  //   get all tenants useeffect
  useEffect(() => {
    // get saved properties from database
    const listRef = collection(db, `/user_data/${ownerid}/tenants`);

    try {
      const q = query(
        listRef,
        where("propertyKey", "==", `${key}`),
        orderBy("dateRegistered", "desc")
      );
      const allDocs = onSnapshot(q, (snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data() });
          setPropertyTenants(items);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
          dateRegistered: serverTimestamp(),
          propertyName: name,
          propertyKey: key,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Menu Labels as an array
  const menuLabelArray = [
    "Overview",
    "Tasks",
    "Tenants",
    "Leases",
    "Units",
    "Notes",
    "Files",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* add tenant button */}
      <div style={{ flex: "0.15" }}>
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIos />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // backgroundColor: "red",
          }}
        >
          <div style={{ flex: ".8" }}>
            {" "}
            <span
              style={{
                fontSize: "1.5em",
                fontWeight: "600",
                // lineHeight: "1",
              }}
            >
              {" "}
              {name} &nbsp;
              <span style={{ fontSize: ".7em" }}>{address}</span>
            </span>{" "}
          </div>
          <div style={{ flex: ".2" }}>
            <AddTenantToPropertyModal
              // addTenantModalOpen={addTenantModalOpen}
              // handleTenantModalClose={handleTenantModalClose}
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
        </div>
      </div>

      <div
        style={{
          // backgroundColor: "red",
          flex: "0.85",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: "1" }}>
          {/* <PropertyMenuTab /> */}
          <PropertyMenuTab
            PropertyTabItemsArray={menuLabelArray}
            //Props for overview menu
            totalUnits={numberOfUnits}
            activeUnits={availableUnits}
            propertyImage1={image1}
            propertyImage2={image2}
          />
        </div>
      </div>
    </div>
  );
}
export default PropertyDetails;
