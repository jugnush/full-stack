import express from 'express'
import  { fetchTasks, createTasks, updateTasks, deleteTasks}  from "./tasks";
import serverLess from "serverless-http";
import cors from "cors"
const app = express();
const port = 3001;

app.use(express.json());

if(process.env.DEVELOPMENT){
 app.use(cors());
      
}

app.get("/", async (req, res) => {
  //   res.send('Hello World!')

  try {
    const task = await fetchTasks();
    res.send(task.Items);
  } catch (e) {
    res.status(400).send(`error fetching:${e}`)
  }
});

app.post("/task", async (req, res) => {
//   res.send("Hello World!");
try {
    const task = await createTasks(task)
    res.send(task.Items);
  } catch (e) {
    res.status(400).send(`error creating:${e}`)
  }
});

app.put("/task", async (req, res) => {
    try {
        const task = await updateTasks(task)
        res.send(task.Items);
      } catch (e) {
        res.status(400).send(`error updated:${e}`)
      }
});

app.delete("/task/:id", async (req, res) => {
    try {
        const { id } = req.params
        const response = await deleteTasks(id)
        res.send(task.Items);
      } catch (e) {
        res.status(400).send(`error deleteing:${e}`)
      }
});

if(process.env.DEVELOPMENT){
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
      
}

export const handler = serverLess(app)