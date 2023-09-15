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

const PropertyNotes = () => {
  // TEMP ownerid
  const [ownerid, setOwnerid] = useState("testUser");
  // property key
  const propertykey = useSelector(property_key);

  // state to set the list title string
  const [listTitle, setListTitle] = useState("");
  // state to set the list item string
  const [addListItem, setAddListItem] = useState("");
  // state to trigger local note component
  const [isLocalNote, setIsLocalNote] = useState(false);
  // state to set the list item array
  const [addLocalListArray, setAddLocalListArray] = useState([]);
  // state to hold all locally added items
  const [localNote, setlocalNote] = useState("");
  // state to hold all saved added items
  const [savedNote, setSavedNote] = useState("");
  // state to trigger the add item component
  const [isAnotherList, setIsAnotherList] = useState(false);
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);
  // number of notes state
  const [numberOfNotesField, setNumberOfNotesField] = useState(0);
  // STATE TO REFRESH GETALLNOTES FUNCTION
  const [getSavedLists, setGetSavedLists] = useState(false);
  const [downloadedSavedList, setDownloadedSavedList] = useState([]);

  // add list item handle action function
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

  // update saved note
  // add list item handle action function
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

  // ref to focus on the set title field
  const listItemInputRef = useRef(null);
  // add another list button handle action function
  const handleCreateLocalNote = () => {
    setIsLocalNote(true);

    // if (numberOfNotesField == 4) {
    //   setIsLocalNote(true);
    // } else {
    //   alert("You have reached your limit of notes");
    // }
  };
  // console.log(numberOfNotes);
  // function triggered when the close button is clicked
  const handleCloseButton = () => {
    // clear local title state

    setListTitle("");
    // clear local list item state

    setAddListItem("");
    setIsAnotherList(false);
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
    console.log("re-rendered");
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
        <div style={{ flex: "0.15", background: "blue" }}>
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
          {downloadedSavedList.map((item, key) => {
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
                      background: "blue",
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
                      <span style={{ fontSize: ".6em" }}>Aug 20</span>{" "}
                      <MoreHoriz sx={{ float: "right" }} />{" "}
                    </div>

                    <div
                      style={{
                        fontSize: ".8em",
                      }}
                    >
                      {item.entries.slice(0, 100)}
                      {/* Write an if stamenet to display the ellipsis if only the length is more than 100 */}
                      {`...`}
                    </div>
                  </div>
                </Card>
              </li>
            </div>;
          })}

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
      <div style={{ flex: ".25", background: "blue" }}>
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
      <div style={{ flex: ".25", background: "blue" }}>
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
