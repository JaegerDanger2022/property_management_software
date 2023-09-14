import React, { useState } from "react";
import "../../App.css";
import ActionButton from "../ActionButton/ActionButton";
import { Add, Close } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Box, Card } from "@mui/material";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../../app/utils/firebaseConfig";

const PropertyNotes = () => {
  // TEMP USERID
  const [userid, setuserid] = useState("testUser");

  // state to set the list title string
  const [listTitle, setListTitle] = useState("");

  // state to trigger the add another list button
  const [isTitle, setIsTitle] = useState(false);
  // state to trigger the add another list button
  const [isAnotherList, setIsAnotherList] = useState(false);

  // add title handle action function
  const handleAddTitle = () => {
    setIsTitle(false);
    setIsAnotherList(true);
    // add firestore setdoc
  };
  // add list item handle action function
  const handleAddListItem = () => {
    setIsTitle(false);
    setIsAnotherList(true);
    // add firestore setdoc
  };

  // add another list button handle action function
  const handleAction = () => {
    setIsTitle(true);
  };

  // random doc name
  const [randomDocName, setRandomDocName] = useState(v4);

  // add entry to list function
  const handleAddToList = () => {
    // const listDocRef = doc(db, `user_data/${userid}/notes`, `${randomDocName}`);
    // await setDoc(listDocRef);
    setIsAnotherList(false);
  };

  if (isTitle) {
    return (
      <AddTitle
        handleAddTitle={handleAddTitle}
        setListTitle={setListTitle}
        setisTitle={setIsTitle}
      />
    );
  } else if (isAnotherList) {
    return (
      <AddAnotherList
        handleAction={handleAddListItem}
        setIsAnotherList={setIsAnotherList}
        handleAddToList={handleAddToList}
      />
    );
  } else {
    return (
      <div style={{ height: "57vh" }}>
        <ActionButton
          handleAction={handleAction}
          startIcon={<Add />}
          label={"Add another List"}
        />
      </div>
    );
  }
};

export default PropertyNotes;

const AddTitle = ({ handleAddTitle, setisTitle, setListTitle }) => {
  return (
    <Card
      sx={{
        width: "20vw",
        height: "20vh",
        padding: "1vh 1vw 0 1vw",
        background: "#C9C9C9",
      }}
    >
      <TextField
        id="filled-basic"
        label="Enter a title..."
        variant="filled"
        value={name}
        onChange={(event) => {
          setListTitle(event.target.value);
        }}
        sx={{ width: "20vw", borderRadius: "2vw" }}
      />
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
        <div onClick={() => setisTitle(false)} className="PropertyNotesCancel">
          <Close />
        </div>
      </Box>
    </Card>
  );
};

const AddAnotherList = ({
  handleAddToList,
  setIsAnotherList,
  setAddListItem,
}) => {
  return (
    <Card
      sx={{
        width: "20vw",
        height: "20vh",
        padding: "1vh 1vw 0 1vw",
        background: "#C9C9C9",
      }}
    >
      <TextField
        id="filled-basic"
        label="Make and entry"
        variant="filled"
        value={name}
        onChange={(event) => {
          setAddListItem(event.target.value);
        }}
        sx={{ width: "20vw", borderRadius: "2vw" }}
      />
      <Box
        sx={{
          display: "flex",
          width: "10vw",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <ActionButton
          sx={{ background: "#579DFF", marginTop: "2vh" }}
          label={"Add"}
          startIcon={<Add />}
          handleAction={handleAddToList}
        />
        <div
          onClick={() => setIsAnotherList(false)}
          className="PropertyNotesCancel"
        >
          <Close />
        </div>
      </Box>
    </Card>
  );
};
