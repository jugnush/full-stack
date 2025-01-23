import { Dialog, DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils";

function UpdateTask({fetchtask, task, isDailogOpen, setIsDailogOpen }) {
  const { id, name, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTask = async () => {
    try {
      const response = axios.put(`${API_URL}`, 
        {
          id,
        name: taskName,
        completed,
      });
      console.log(response.data);
      await fetchtask();
      setTaskName("");
      setIsDailogOpen(false);
    } catch (e) {
      console.log(`this is error from frontend ${e}`);
    }
  }

  return (
    <Dialog open={isDailogOpen}>
      <DialogTitle>eDIT</DialogTitle>
      <TextField
        onChange={(e) => (e) => setTaskName(e.target.value)}
      ></TextField>
      <button
        onClick={async() => {
         await handleUpdateTask();
          setIsDailogOpen(false);
        }}
      >
        check
      </button>
    </Dialog>
  );
}

export default UpdateTask;
