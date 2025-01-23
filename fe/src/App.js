
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import axios from "axios"
import { useEffect, useState } from 'react';
import { API_URL } from './utils';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
  try{
    const response = await axios.get(`${API_URL}`);
    setTasks(response.data);
  }catch(e){
    console.log(`this is error from frontend ${e}`)
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="App">
      <AddTaskForm  fetchTasks={fetchTasks} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
}

export default App;
