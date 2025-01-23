

import { Checkbox, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import UpdateTask from "./UpdateTask";

import { API_URL } from "../utils";
import axios from "axios";
function Task({ task, fetchTasks }) {
  const {id, name, completed} = task;
  const [iscompleted, setisCompleted] = useState(completed);
  const [isDailogOpen, setIsDailogOpen] = useState(false);

  const handleUpdateTask = () => {
 try{
    const response = axios.put(`${API_URL}`, 
      {
        id,
      name,
      completed:!iscompleted
    });
    console.log(response.data);
    setisCompleted((prev)=>!prev);
 }catch(e){
   console.log(`this is error from frontend ${e}`)  
    }
  };

  const HandleDeleteTask = () => {
    try{
      const response = axios.delete(`${API_URL}/task/${id}`);
      console.log(response.data);
    fetchTasks();
    }catch(e){
      console.log(`this is error from frontend ${e}`)
    }
   
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
         <Checkbox {...label} defaultChecked size="small" />
      <Typography variant="h4">name</Typography>
      <button variant="contained" onClick={() => setIsDailogOpen(true)}>
        Edit
      </button>
      <button variant="contained" onClick={() => HandleDeleteTask}>
        Delete
      </button>
      <UpdateTask
        fetchTasks={fetchTasks}
        isDailogOpen={isDailogOpen}
        setIsDailogOpen={setIsDailogOpen}
        task={task}
      />
    </div>
  );
}

export default Task;
