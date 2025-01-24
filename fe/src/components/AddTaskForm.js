import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from "axios";
import { API_URL } from "../utils";

function AddTaskForm({fetchTasks}) {
  const [task, setTask] = useState('');

  const addNewTask = async () => {
    try {
      const response = await axios.post(`${API_URL}/task`, { 
        name: task,
        completed: false,
      });
      console.log(response.data);
      fetchTasks();
    } catch (e) {
      console.log(`this is error from frontend ${e}`);
    }
  };
  const handleClick=()=>{
    console.log('jioiii jungu')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={12}>
        <Grid item xs={8}>
        <Typography align="center" variant='h4' paddingTop={2}>Msy List</Typography>
  </Grid>
  <Grid item xs={12}>
  <TextField id="outlined-basic" label="Outlined" variant="outlined"   marginRight={2} onChange={(e)=>{setTask(e.target.value)}} />
  </Grid>
  <Grid item xs={4}>

  <Button variant="contained" disabled={!task.length} marginLeft={2} onClick={addNewTask}>Add Item</Button>
  </Grid>
    
      </Grid>
      </Box>
  );
}

export default AddTaskForm;
