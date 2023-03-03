import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import JobList from "./components/JobList";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default function App() {
  const [job, setJob] = useState([]);
  console.log("App.....");
  const [box, setBox] = useState([{ id: 1, title: "Ceket", price: 100 }]);
  const getJobs = () => {
    const response = axios.get(
      "https://api.github.com/repos/frontendbr/vagas/issues"
    );
    console.log("response....");
    console.log(response);
    // console.log(response.data);
    console.log("response+++");
    setJob(response);
    console.log("---");
    console.log(job);
    console.log("++++");
  };
  useEffect(() => {
    getJobs();
  }, []);
  const addToCart = (box1) => {
    setBox([...box, box1]);
  };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Kod",
      reminder: true
    },
    {
      id: 2,
      text: "Spor",
      reminder: false
    }
  ]);

  //Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, task]);
    //  setTasks([...tasks, { text: "aaaaaa", reminder: true, id: 1 }]);
    //setTasks([...tasks, newTask])
  };

  //Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(tasks);
  };
  return (
    <div>
      <Header title="Yapılacaklar " />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To show"
      )}

      <JobList job={job} />
    </div>
  );
}
