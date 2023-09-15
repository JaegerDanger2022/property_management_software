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

const PropertyNotes = () => {
  // TEMP USERID
  const [userid, setuserid] = useState("testUser");
  // property key
  const propertykey = useSelector(property_key);

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
  // CHANGE
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
        `user_data/${userid}/properties/${propertykey}/notes`,
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

  // function to delete saved note
  const handleDeleteNote = async (entryid) => {
    await deleteDoc(
      doc(
        db,
        `user_data/${userid}/properties/${propertykey}/notes`,
        `${entryid}`
      )
    );
    setGetSavedLists(!getSavedLists);
  };

  // STATE TO REFRESH GETALLNOTES FUNCTION
  const [getSavedLists, setGetSavedLists] = useState(false);
  const [downloadedSavedList, setDownloadedSavedList] = useState([]);
  // get saved lists
  useEffect(() => {
    const getAllNotes = async () => {
      // reset randomDocName for next list
      setRandomDocName(v4);
      // get saved lists from database
      const listRef = collection(
        db,
        `/user_data/${userid}/properties/${propertykey}/notes`
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
    getAllNotes();
  }, [getSavedLists]);

  return (
    <div style={{ display: "flex", height: "57vh" }}>
      {/* {downloadedSavedList.map((doc, key) => (
        <SavedList
          key={key}
          entryTitle={doc.entryTitle}
          entries={doc.entries}
          handleDeleteNote={() => handleDeleteNote(doc.entryid)}
        />
      ))}

      {isEntering ? (
        <Box sx={{ display: "flex" }}>
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
            // diplay saved notes and add button
            <div style={{ display: "flex" }}>
              <div style={{ height: "57vh" }}>
                <ActionButton
                  handleAction={handleAction}
                  startIcon={<Add />}
                  label={"Add another List"}
                />
              </div>
            </div>
          )}
        </Box>
      ) : (
        // diplay saved notes and add button
        <div style={{ display: "flex" }}>
          <div style={{ height: "57vh" }}>
            <ActionButton
              handleAction={handleAction}
              startIcon={<Add />}
              label={"Add another List"}
            />
          </div>
        </div>
      )} */}

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
            <IconButton>
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
                      {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quidem vitae ipsum earum harum! Odit quam laudantium
                  totam quis perferendis vero expedita quibusdam. Sunt, suscipit
                  ad quas necessitatibus explicabo ratione.`.slice(0, 100)}
                      {/* Write an if stamenet to display the ellipsis if only the length is more than 100 */}
                      {`...`}
                    </div>
                  </div>
                </Card>
              </li>
            </div>

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
        }}
      >
        {/* /// COMPONENT  FOT THE NOTE ITSELF */}
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
            <IconButton>
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
          ></textarea>
        </Card>
        {/* // THE COMPONENT ENDS HERE */}

        {/* INTENTIONALLY DUPLICATED THE COMPOMENTS TO SEE HOW IT WILL LOOK ON THE PAGE WE WILL USE A MAP FUNCTION TO THAT  */}
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
            <IconButton>
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
          ></textarea>
        </Card>
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
            <IconButton>
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
          ></textarea>
        </Card>
      </div>
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
        height: "20vh",
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
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "20vw",
        minHeight: "20vh",
        maxHeight: "auto",
        padding: "1vh 1vw 1vw 1vw",
        background: "#C9C9C9",
        borderRadius: "1vw",
        overflowY: "auto",
      }}
    >
      {/* card title */}
      <Box
        sx={{
          background: "#22272B",
          borderRadius: "1vw",
          padding: "0.2vw",
          marginBottom: "1vh",
        }}
        className="PropertyNotes_SavedNoteTitle"
      >
        <Typography
          variant="h5"
          color={theme.palette.text.onSurface}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </Box>
      {/* card text field */}
      <TextField
        autoFocus
        inputRef={listItemInputRef}
        multiline
        maxRows={40}
        id="filled-basic"
        label="Make and entry"
        variant="filled"
        value={addListItem}
        onChange={(event) => {
          setAddListItem(event.target.value);
        }}
        sx={{ width: "20vw", borderRadius: "2vw", marginBottom: "1vh" }}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     handleAddListItem();
        //   }
        // }}
      />
      {/* card saved content */}
      {localListItems.map((item) => (
        <Typography
          variant="body"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0.2vw",
            marginBottom: "1vh",
          }}
          className="PropertyNotes_SavedNoteItem"
        >
          {item}
        </Typography>
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

const SavedList = ({ entryTitle, entries, handleDeleteNote }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "20vw",
        minHeight: "20vh",
        maxHeight: "80vh",
        margin: "0 1vw 0 0",
        padding: "1vh 1vw 1vh 1vw",
        background: "#C9C9C9",
        borderRadius: "1vw",
        overflowY: "auto",
      }}
    >
      {/* delete button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1vh",
        }}
        onClick={handleDeleteNote}
      >
        <IconButton>
          <Delete sx={{ color: "red" }} />
        </IconButton>
      </div>
      {/* note title */}
      <Box
        sx={{
          background: "#22272B",
          borderRadius: "1vw",
          padding: "0.2vw",
          marginBottom: "1vh",
        }}
        className="PropertyNotes_SavedNoteTitle"
      >
        <Typography
          variant="h5"
          color={theme.palette.text.onSurface}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {entryTitle}
        </Typography>
      </Box>
      {/* note items */}
      {entries.map((list) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            display: "flex",
            flexDirection: "column",
            padding: "0.2vw",
            marginBottom: "1vh",
          }}
          className="PropertyNotes_SavedNoteItem"
        >
          <Typography>{list}</Typography>
        </div>
      ))}
    </Card>
  );
};
