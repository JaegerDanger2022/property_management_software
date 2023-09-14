import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import ActionButton from "../ActionButton/ActionButton";
import { Add, Close, Save } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Alert, Box, Card, Snackbar, Typography } from "@mui/material";
import {
  collection,
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

const PropertyNotes = () => {
  // TEMP USERID
  const [userid, setuserid] = useState("testUser");

  // state to set the list title string
  const [listTitle, setListTitle] = useState("");
  // state to set the list item string
  const [addListItem, setAddListItem] = useState("");
  // state to hold all locally added items
  const [localListItems, setLocalListItems] = useState([]);
  // state to trigger the add list component
  const [isTitle, setIsTitle] = useState(false);
  // state to trigger the add item component
  const [isAnotherList, setIsAnotherList] = useState(false);
  // state to trigger the card components on which the title and add item components are displayed
  const [isEntering, setIsEntering] = useState(false);
  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);
  // state to trigger add title alert
  const [addTitleError, setAddTitleError] = useState(false);
  // add list item autofocus state
  const [listItemAutoFocus, setListItemAutoFocus] = useState(true);
  const [ownerid, setOwnerid] = useState("testUser");

  // add title handle action function
  const handleAddTitle = (e) => {
    if (listTitle === "" || listTitle === " ") {
      setAddTitleError(true);
    } else {
      setIsTitle(false);
      setIsAnotherList(true);
    }

    // add firestore setdoc
  };
  // add list item handle action function
  const handleAddListItem = () => {
    setLocalListItems((prev) => [...prev, addListItem]);
    setAddListItem("");
    listItemInputRef.current.focus();
  };

  // ref to focus on the set title field
  const listItemInputRef = useRef(null);
  // add another list button handle action function
  const handleAction = () => {
    setIsTitle(true);
    setIsEntering(true);
  };

  // function triggered when the close button is clicked
  const handleCloseButton = () => {
    // clear local title state

    setListTitle("");
    // clear local list item state

    setAddListItem("");
    // clear local list array
    setLocalListItems([]);
    setIsTitle(false);
    setIsAnotherList(false);
  };

  // function triggered when save button is clicked
  const handleSaveList = async () => {
    // reset randomDocName for next list
    setRandomDocName(v4);
    try {
      const listDocRef = doc(
        db,
        `user_data/${userid}/notes`,
        `${randomDocName}`
      );
      await setDoc(listDocRef, {
        entryTitle: listTitle,
        entries: localListItems,
        dateCreated: serverTimestamp(),
        entryid: randomDocName,
      });
      // clear local list array
      setLocalListItems([]);
      // clear title state
      setListTitle("");
      // clear local list item state
      setAddListItem("");
      // close components
      setIsTitle(false);
      setIsAnotherList(false);
      // refresh saved list
      setGetSavedLists(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [getSavedLists, setGetSavedLists] = useState(false);
  const [downloadedSavedList, setDownloadedSavedList] = useState([]);
  // get saved lists
  useEffect(() => {
    // reset randomDocName for next list
    setRandomDocName(v4);
    // get saved lists from database
    const listRef = collection(db, `/user_data/${ownerid}/notes`);
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
  }, [getSavedLists]);

  return isEntering ? (
    <Box sx={{ display: "flex", height: "auto" }}>
      {downloadedSavedList.map((doc) => (
        <SavedList entryTitle={doc.entryTitle} entries={doc.entries} />
      ))}
      {isTitle ? (
        <AddTitle
          handleAddTitle={handleAddTitle}
          listTitle={listTitle}
          setListTitle={setListTitle}
          setisTitle={setIsTitle}
          setAddTitleError={setAddTitleError}
          addTitleError={addTitleError}
          handleCloseButton={handleCloseButton}
        />
      ) : isAnotherList ? (
        <AddAnotherList
          title={listTitle}
          setIsAnotherList={setIsAnotherList}
          addListItem={addListItem}
          setAddListItem={setAddListItem}
          handleAddListItem={handleAddListItem}
          localListItems={localListItems}
          handleCloseButton={handleCloseButton}
          handleSaveList={handleSaveList}
          listItemInputRef={listItemInputRef}
        />
      ) : (
        <div style={{ height: "57vh" }}>
          <ActionButton
            handleAction={handleAction}
            startIcon={<Add />}
            label={"Add another List"}
          />
        </div>
      )}
    </Box>
  ) : (
    <div style={{ height: "57vh" }}>
      <ActionButton
        handleAction={handleAction}
        startIcon={<Add />}
        label={"Add another List"}
      />
    </div>
  );
};

export default PropertyNotes;

const AddTitle = ({
  handleAddTitle,
  listTitle,
  setListTitle,
  addTitleError,
  setAddTitleError,
  handleCloseButton,
}) => {
  return (
    <Card
      sx={{
        width: "20vw",
        minHeight: "20vh",
        maxHeight: "auto",
        padding: "1vh 1vw 1vh 1vw",
        background: "#C9C9C9",
        borderRadius: "1vw",
      }}
    >
      <TextField
        autoFocus
        id="filled-basic"
        label="Enter a title..."
        variant="filled"
        value={listTitle}
        onChange={(event) => {
          setAddTitleError(false);
          setListTitle(event.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTitle();
          }
        }}
        sx={{ width: "20vw", borderRadius: "2vw" }}
      />
      {addTitleError && <Alert severity="error">Enter a title!</Alert>}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <ActionButton
          sx={{ background: "#579DFF", marginTop: "2vh" }}
          label={"Add Title"}
          startIcon={<Add />}
          handleAction={handleAddTitle}
        />
        <ActionButton
          label={"Cancel"}
          sx={{ background: "red", marginTop: "2vh" }}
          handleAction={handleCloseButton}
        />
      </Box>
    </Card>
  );
};

const AddAnotherList = ({
  handleAddListItem,
  addListItem,
  setAddListItem,
  title,
  localListItems,
  handleCloseButton,
  handleSaveList,
  listItemInputRef,
}) => {
  return (
    <Card
      sx={{
        width: "20vw",
        height: "20vh",
        padding: "1vh 1vw 1vw 1vw",
        background: "#C9C9C9",
        height: "auto",
        borderRadius: "1vw",
      }}
    >
      {/* card title */}
      <Typography variant="h5">{title}</Typography>
      {/* card text field */}
      <TextField
        autoFocus
        inputRef={listItemInputRef}
        id="filled-basic"
        label="Make and entry"
        variant="filled"
        value={addListItem}
        onChange={(event) => {
          setAddListItem(event.target.value);
        }}
        sx={{ width: "20vw", borderRadius: "2vw" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddListItem();
          }
        }}
      />
      {/* card saved content */}
      {localListItems.map((item) => (
        <div style={{ display: "flex", flexDirection: "column" }}>{item}</div>
      ))}
      {/* card action button */}
      <Box
        sx={{
          display: "flex",
          width: "auto",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <ActionButton
          sx={{ background: "#579DFF", marginTop: "2vh" }}
          label={"Add"}
          startIcon={<Add />}
          handleAction={handleAddListItem}
        />
        <ActionButton
          label={"Cancel"}
          sx={{ background: "red", marginTop: "2vh" }}
          handleAction={handleCloseButton}
        />
        <ActionButton
          label={<Save />}
          sx={{ background: "green", marginTop: "2vh" }}
          handleAction={handleSaveList}
        />
      </Box>
    </Card>
  );
};

const SavedList = ({ entryTitle, entries }) => {
  return (
    <Card
      sx={{
        width: "20vw",
        minHeight: "20vh",
        maxHeight: "auto",
        margin: "0 1vw 0 0",
        padding: "1vh 1vw 1vh 1vw",
        background: "#C9C9C9",
        borderRadius: "1vw",
      }}
    >
      <Typography variant="h4">{entryTitle}</Typography>
      {entries.map((list) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography>{list}</Typography>
        </div>
      ))}
    </Card>
  );
};
