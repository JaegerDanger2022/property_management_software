import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import ActionButton from "../ActionButton/ActionButton";
import {
  Add,
  Cancel,
  Check,
  Close,
  Delete,
  MoreHoriz,
  Save,
  Settings,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Box,
  Button,
  Card,
  IconButton,
  Popover,
  Popper,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../../app/utils/firebaseConfig";
import { useSelector } from "react-redux";
import { property_key } from "../../../app/features/propertyDetailsSlice";

const PropertyNotes = () => {
  // TEMP USERID
  const [userid, setuserid] = useState("testUser");
  // property key
  const propertykey = useSelector(property_key);

  ///  functionalities for note

  const [AllNotesContent, setAllNotesContent] = useState([]);
  const [idReceivedOnClick, setIdReceivedOnClick] = useState("");
  const [colorToUpdate, setColorToUpdate] = useState("");
  // const [addButtonClicked,setAddButtonClicked] = useState(0)

  const CreateNewNote = async () => {
    const noteIdentifier = v4();

    const newNote = {
      note: "",
      timestamp: serverTimestamp(),
      color: "blue",
      id: noteIdentifier,
    };

    await setDoc(
      doc(
        db,
        `/user_data/${userid}/properties/${propertykey}/newNotes`,
        noteIdentifier
      ),
      newNote
    );
  };

  const UpdateExistingNote = (newNoteContent, noteId) => {
    const collectionRef = doc(
      db,
      `/user_data/${userid}/properties/${propertykey}/newNotes`,
      noteId
    );
    updateDoc(collectionRef, {
      note: newNoteContent,
      timestamp: serverTimestamp(),
    });
  };

  const UpdataNoteColor = (color, noteId) => {
    const collectionRef = doc(
      db,
      `/user_data/${userid}/properties/${propertykey}/newNotes/${noteId}`
    );
    updateDoc(collectionRef, {
      color: color,
      // timestamp: serverTimestamp(),
    });
  };

  const DeleteNote = (noteId) => {
    deleteDoc(
      doc(
        db,
        `/user_data/${userid}/properties/${propertykey}/newNotes/${noteId}`
      )
    );
  };

  // COLLECTING ALL THE NOTES AND REFINING THE DATE FROM FIRESTORE TIMESTAMP TO A READABLE ONE
  const collectionRef = collection(
    db,
    `/user_data/${userid}/properties/${propertykey}/newNotes`
  );

  useEffect(() => {
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const alldata = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      items.forEach((item) => {
        if (item.timestamp != "") {
          const firestoreTimestamp = item.timestamp;
          const date = firestoreTimestamp.toDate();
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          };
          const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
          const dateString = dateTimeFormat.format(date);
          item.timestamp = dateString;
        }
      });

      setAllNotesContent(items);
    });
    return () => {
      alldata();
    };
  }, []);

  const retrieveColorFromSingleNotesItem = (value) => {
    setColorToUpdate(value);
    // alert(`successfully retireved ${value}`);
  };

  const retrieveTheClickedNoteIdFunction = (value) => {
    // alert(`retireved id ${value}`);
    setIdReceivedOnClick(value);
  };

  useEffect(() => {
    // This if statment is to prevent the updating the database on the first render of the page because by then idReceivedOnClick will be an empty string and im also checking if its not undefined just to be safe

    if (idReceivedOnClick !== undefined && idReceivedOnClick.length > 0) {
      console.log();

      UpdataNoteColor(colorToUpdate, idReceivedOnClick);
    }
  }, [colorToUpdate]);

  return (
    <div style={{ display: "flex", height: "57vh" }}>
      <div
        style={{
          flex: "0.4",
          // background: "red",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Card
          style={{
            borderRadius: "2%",
            width: "87%",
            height: "95%",
            // background: "blue",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: "0.15", background: "blue" }}>
            <IconButton onClick={CreateNewNote}>
              <Add />
            </IconButton>
            <IconButton sx={{ float: "right" }}>
              <Settings />
            </IconButton>
          </div>
          <div
            style={{
              flex: "0.15",
              background: "whitesmoke",
              display: "grid",
              placeItems: "center",
            }}
          >
            {" "}
            <TextField
              sx={{ width: "92%" }}
              id="outlined-basic"
              size="small"
              label="Search"
              variant="outlined"
            />
          </div>
          <div
            style={{
              flex: "0.7",
              display: "flex",
              // height: "30%",
              // background: "red",
              // justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "1vw",
              overflowY: "scroll",
            }}
          >
            {/* // CARD SETTINGS */}
            {/* // This is the component for representing the notes in the mother sticky notes holder */}
            {AllNotesContent && AllNotesContent.length > 0
              ? AllNotesContent.map((data) => {
                  return (
                    <NotesSummary
                      notesContent={data.note}
                      notesTimestamp={data.timestamp}
                      notesColor={data.color}
                    />
                  );
                })
              : ""}
            {/* // END OF CARD SETTINGS  */}

            {/* // Second Card */}
          </div>
        </Card>
      </div>
      <div
        style={{
          flex: "0.6",
          // background: "blue",
          paddingTop: "1.5vh",
          display: "flex",
          gap: "1.5%",
          flexWrap: "wrap",
          overflowY: "scroll",
        }}
      >
        {/* /// COMPONENT  FOT THE NOTE ITSELF */}
        {AllNotesContent &&
          AllNotesContent.map((data) => {
            const { id, note } = data;

            return (
              <SingleNotesItem
                key={id}
                notesColor={data.color}
                addNoteFunction={CreateNewNote}
                updateNotesFunction={(textAreaValueFromSingeNotesComponent) => {
                  console.log(
                    "updatedVal",
                    textAreaValueFromSingeNotesComponent
                  );
                  UpdateExistingNote(textAreaValueFromSingeNotesComponent, id);
                }}
                valueFromDatabaseAsSavedNote={note}
                submitNotesColorToMotherComponent={
                  retrieveColorFromSingleNotesItem
                }
                id={id}
                retrieveIdFromThisComponentToParentForUpdatingColor={
                  retrieveTheClickedNoteIdFunction
                }
                deleteSelectedNote={() => {
                  DeleteNote(id);
                }}
              />
            );
          })}

        {/* // THE COMPONENT ENDS HERE */}

        {/* INTENTIONALLY DUPLICATED THE COMPOMENTS TO SEE HOW IT WILL LOOK ON THE PAGE WE WILL USE A MAP FUNCTION TO THAT  */}
      </div>
    </div>
  );
};

export default PropertyNotes;

// The component that has search bar and displays the summary of all notes
const NotesSummary = ({ notesContent, notesTimestamp, notesColor }) => {
  return (
    <div style={{ listStyleType: "none" }}>
      <li>
        <Card
          style={{
            height: "15vh",
            width: "97%",
            // background: "red",
            borderRadius: ".5vw",
            display: "flex",
            flexDirection: "column",
            marginBottom: "1vh",
          }}
        >
          <div
            style={{
              background: notesColor,
              flex: "0.08",
              borderTopLeftRadius: ".5vw",
              borderTopRightRadius: ".5vw",
            }}
          >
            {" "}
          </div>
          <div
            style={{
              background: "blue",
              flex: "0.92",
              display: "flex",
              flexDirection: "column",
              borderBottomLeftRadius: ".5vw",
              borderBottomRightRadius: ".5vw",
              // borderBottomLeftRadius: "10%",
            }}
          >
            <div style={{ flex: "0.25", background: "white" }}>
              {" "}
              <span style={{ fontSize: ".6em" }}>{notesTimestamp}</span>{" "}
              <MoreHoriz sx={{ float: "right" }} />{" "}
            </div>

            <div
              style={{
                fontSize: ".8em",
              }}
            >
              {notesContent.slice(0, 100)}
              {/* Write an if stamenet to display the ellipsis if only the length is more than 100 */}
              {notesContent &&
              notesContent.length > 0 &&
              notesContent.length > 100
                ? `...`
                : ""}
            </div>
          </div>
        </Card>
      </li>
    </div>
  );
};

// The component for single notes on the right panel
const SingleNotesItem = ({
  addNoteFunction,
  updateNotesFunction,
  valueFromDatabaseAsSavedNote,
  submitNotesColorToMotherComponent,
  id,
  retrieveIdFromThisComponentToParentForUpdatingColor,
  notesColor,
  deleteSelectedNote,
}) => {
  const [textAreaValue, setTextAreaValue] = useState(
    valueFromDatabaseAsSavedNote
  );

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleUpdateNotes = () => {
    // console.log("Updating notes with value:", textAreaValue);
    updateNotesFunction(textAreaValue);
  };

  const retireveColorFromColorSelectorPopover = (value) => {
    // alert(`color selected ${value}`);

    submitNotesColorToMotherComponent(value);
  };

  const handleClick = () => {
    retrieveIdFromThisComponentToParentForUpdatingColor(id);
  };

  return (
    <div style={{ width: "48%", height: "46%" }} onClick={handleClick}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: ".25", background: notesColor }}>
          <IconButton onClick={addNoteFunction}>
            <Add />{" "}
          </IconButton>{" "}
          <IconButton onClick={handleUpdateNotes}>
            {" "}
            <Check />{" "}
          </IconButton>{" "}
          <span style={{ float: "right" }}>
            <IconButton>
              <ColorSelectorPopover
                onColorSelect={retireveColorFromColorSelectorPopover}
              />
            </IconButton>
            <IconButton onClick={deleteSelectedNote}>
              {" "}
              <Close />{" "}
            </IconButton>{" "}
          </span>
        </div>

        <textarea
          style={{
            flex: ".75",
            overflowY: "scroll",
            resize: "none",
            outline: "none",
            border: "none",
            padding: "4% 4%",
          }}
          // value={valueFromDatabaseAsSavedNote}
          // defaultValue={valueFromDatabaseAsSavedNote}
          value={textAreaValue}
          onChange={handleTextAreaChange}
        ></textarea>
      </Card>
    </div>
  );
};

// Conponent which will be used to display each colorCircle on click of the moreHoriz icon (...)
const ColorSelectorPopover = ({ onColorSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // You can change the colors here
  const colorArray = ["red", "yellow", "blue", "indigo"];

  return (
    <div>
      <span onClick={handleClick}>
        <MoreHoriz />{" "}
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Card
          sx={{
            width: 140,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {colorArray.map((data, uniqueId) => {
            return (
              <div
                style={{
                  width: "20%",
                  height: "70%",
                  marginLeft: "3%",
                  borderRadius: "60%",
                }}
                onClick={() => {
                  // alert(data);
                  onColorSelect(data);
                }}
              >
                <Card
                  key={uniqueId}
                  sx={{
                    backgroundColor: data,
                    width: "100%",
                    height: "100%",
                    borderRadius: "60%",
                    cursor: "pointer",
                  }}
                  // onClick={}
                ></Card>{" "}
              </div>
            );
          })}
        </Card>
      </Popover>
    </div>
  );
};
