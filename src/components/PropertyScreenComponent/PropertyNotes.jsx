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
  Card,
  IconButton,
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
import { number } from "prop-types";
import { formatFirestoreTimestamp } from "../../../app/utils/dateConversion";

// the useeffect gets all the saved notes from the database ansaves it in downloadedSavedList and updates the numberOfNotesField
// NotesOverview component displays a summary of all the notes. formatFirestoreTimestamp converts the timestamp
// handleCreateLocalNote attached to the Add button of handleCreateLocalNote. It triggers an instance of LocalNote
// LocalNote component has handleAddLocalNote function attached to its Add button. it submits the note to the database
// SavedNote component is rendered when handleAddLocalNote is triggered. It displays a similar component to LocalNote, howerever,
// the initial value of the textarea is the database verion of the entry from the LocalNote component.
// when handleAddLocalNote is triggered the textarea value is uploaded as entries in the database. also an field called numberOfNotesField is added.
// it will be used to limit the number of notes the user can create
// SavedNote has handleUpdateSavedNote attached to its Add button. it updates the entries field in the database
// handleDeleteNote deletes the note
//
const PropertyNotes = () => {
  // TEMP ownerid
  const [ownerid, setOwnerid] = useState("testUser");
  // property key
  const propertykey = useSelector(property_key);

  // state to trigger local note component
  const [isLocalNote, setIsLocalNote] = useState(false);

  // state to hold all locally added items
  const [localNote, setlocalNote] = useState("");
  // state to hold all saved added items
  const [savedNote, setSavedNote] = useState("");
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);
  // number of notes state
  const [numberOfNotesField, setNumberOfNotesField] = useState(0);
  // STATE TO REFRESH GETALLNOTES FUNCTION
  const [getSavedLists, setGetSavedLists] = useState(false);
  const [downloadedSavedList, setDownloadedSavedList] = useState([]);

  // function to initialize an instance of LocalNote component
  const handleCreateLocalNote = () => {
    setIsLocalNote(true);
  };
  // function to submit the value of textarea in LocalNote
  const handleAddLocalNote = async () => {
    // reset randomDocName for next list
    setRandomDocName(v4);

    // set document
    try {
      const listDocRef = doc(
        db,
        `user_data/${ownerid}/properties/${propertykey}/notes`,
        `${randomDocName}`
      );
      await setDoc(listDocRef, {
        entries: localNote,
        dateCreated: serverTimestamp(),
        entryid: randomDocName,
      });
      // clear local list array
      setlocalNote("");
      // close local note component
      setIsLocalNote(false);
      // refresh usefeect
      setGetSavedLists(!getSavedLists);
    } catch (error) {
      console.log(error);
    }

    // increase number of notes field
    try {
      const numberOfNotesRef = doc(
        db,
        `user_data/${ownerid}/properties`,
        `${propertykey}`
      );
      await updateDoc(numberOfNotesRef, {
        numberOfNotes: increment(1),
      });
    } catch (error) {}
  };

  // function to update the value of textarea in SavedNote
  const handleUpdateSavedNote = async (entryid) => {
    // set document
    try {
      const listDocRef = doc(
        db,
        `user_data/${ownerid}/properties/${propertykey}/notes`,
        `${entryid}`
      );
      await updateDoc(listDocRef, {
        entries: savedNote,
        dateCreated: serverTimestamp(),
      });

      setGetSavedLists(!getSavedLists);
    } catch (error) {
      console.log(error);
    }
  };

  // function to delete saved note
  const handleDeleteNote = async (entryid) => {
    await deleteDoc(
      doc(
        db,
        `user_data/${ownerid}/properties/${propertykey}/notes`,
        `${entryid}`
      )
    );
    // Update the downloadedSavedList state by filtering out the deleted item
    setDownloadedSavedList((prevList) =>
      prevList.filter((item) => item.entryid !== entryid)
    );
    // refresh useeffect
    setGetSavedLists(!getSavedLists);
  };

  // get saved lists
  useEffect(() => {
    // reset randomDocName for next list
    setRandomDocName(v4);
    // get number of notes created so far
    const getNumberOfNotes = async () => {
      const numberOfNotesRef = doc(
        db,
        `user_data/${ownerid}/properties`,
        `${propertykey}`
      );
      const numberOfNotesSnap = await getDoc(numberOfNotesRef);
      setNumberOfNotesField(numberOfNotesSnap.data().numberOfNotes);
    };
    const getAllNotes = async () => {
      // get saved lists from database
      const listRef = collection(
        db,
        `/user_data/${ownerid}/properties/${propertykey}/notes`
      );
      try {
        const q = query(listRef, orderBy("dateCreated", "desc"));
        const allDocs = onSnapshot(q, (snapshot) => {
          const items = [];
          snapshot.forEach((doc) => {
            items.push({ ...doc.data() });
            setDownloadedSavedList(items);
          });
        });
      } catch (error) {}
    };

    getNumberOfNotes();
    getAllNotes();
  }, [getSavedLists]);

  return (
    <div style={{ display: "flex", height: "57vh" }}>
      <NotesOverview
        handleCreateLocalNote={handleCreateLocalNote}
        downloadedSavedList={downloadedSavedList}
      />
      {/* local note */}
      {isLocalNote && (
        <LocalNote
          handleAddLocalNote={handleAddLocalNote}
          localNote={localNote}
          setlocalNote={setlocalNote}
        />
      )}
      <div
        style={{
          flex: "0.6",
          // background: "blue",
          paddingTop: "1.5vh",
          display: "flex",
          gap: "1.5%",
          flexWrap: "wrap",
        }}
      >
        {/* /// COMPONENT  FOT THE NOTE ITSELF */}
        {downloadedSavedList.map((doc, key) => (
          <SavedNote
            key={key}
            entries={doc.entries}
            handleUpdateSavedNote={() => handleUpdateSavedNote(doc.entryid)}
            handleDeleteNote={() => handleDeleteNote(doc.entryid)}
            setSavedNote={setSavedNote}
          />
        ))}
        {/* // THE COMPONENT ENDS HERE */}
      </div>
    </div>
  );
};

export default PropertyNotes;

const NotesOverview = ({ downloadedSavedList, handleCreateLocalNote }) => {
  const theme = useTheme();
  return (
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
        <div style={{ flex: "0.15", background: "#747779" }}>
          <IconButton onClick={handleCreateLocalNote}>
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
          {downloadedSavedList.map((item, key) => (
            <div style={{ listStyleType: "none" }} key={key}>
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
                      background: "#747779",
                      flex: "0.08",
                      borderTopLeftRadius: ".5vw",
                      borderTopRightRadius: ".5vw",
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    style={{
                      background: "#747779",
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
                      <span style={{ fontSize: ".6em" }}>
                        {formatFirestoreTimestamp(item.dateCreated)}
                      </span>{" "}
                      <MoreHoriz sx={{ float: "right" }} />{" "}
                    </div>

                    <div
                      style={{
                        fontSize: ".8em",
                      }}
                    >
                      <Typography
                        variant="body"
                        color={theme.palette.text.onSurface}
                      >
                        {item.entries.slice(0, 100)}
                      </Typography>
                      {/* Write an if stamenet to display the ellipsis if only the length is more than 100 */}
                      {`...`}
                    </div>
                  </div>
                </Card>
              </li>
            </div>
          ))}

          {/* // END OF CARD SETTINGS  */}

          {/* // Second Card */}
        </div>
      </Card>
    </div>
  );
};

const LocalNote = ({ handleAddLocalNote, localNote, setlocalNote }) => {
  return (
    <Card
      sx={{
        width: "48%",
        height: "46%",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: ".25", background: "#747779" }}>
        <IconButton onClick={handleAddLocalNote}>
          <Add />{" "}
        </IconButton>{" "}
        <IconButton>
          {" "}
          <Check />{" "}
        </IconButton>{" "}
        <span style={{ float: "right" }}>
          <IconButton>
            <MoreHoriz />
          </IconButton>{" "}
          <IconButton>
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
        value={localNote}
        onChange={(event) => {
          setlocalNote(event.target.value);
        }}
      ></textarea>
    </Card>
  );
};

const SavedNote = ({
  setSavedNote,
  entries,
  handleUpdateSavedNote,
  handleDeleteNote,
}) => {
  const [editableSavedNote, setEditableSavedNote] = useState(entries);
  // Use useEffect to update editableSavedNote when the entries prop changes
  useEffect(() => {
    setEditableSavedNote(entries);
  }, [entries]);
  return (
    <Card
      sx={{
        width: "48%",
        height: "46%",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: ".25", background: "#747779" }}>
        <IconButton onClick={handleUpdateSavedNote}>
          <Add />{" "}
        </IconButton>{" "}
        <IconButton>
          {" "}
          <Check />{" "}
        </IconButton>{" "}
        <span style={{ float: "right" }}>
          <IconButton>
            <MoreHoriz />
          </IconButton>{" "}
          <IconButton onClick={handleDeleteNote}>
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
        value={editableSavedNote}
        onChange={(event) => {
          setEditableSavedNote(event.target.value);
          setSavedNote(event.target.value);
        }}
      ></textarea>
    </Card>
  );
};
