import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { db } from "../database/Firebase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import "./ShowTask.css";
import { MdDelete } from "react-icons/md";

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]); // separate state for filtered tasks

  const getAllTasks = async () => {
    const allTasks = await getDocs(collection(db, "tasks"));
    const taskData = allTasks.docs.map((task) => ({ ...task.data(), id: task.id }));
    setTasks(taskData);
    setFilteredTasks(taskData); // initialize filtered tasks to all tasks
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredTasks(tasks); // show all tasks when search is empty
    } else {
      const filtered = tasks.filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  }, [search, tasks]); // include both search and tasks as dependencies

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    getAllTasks(); 
  };

  return (
    <div>
      <NavBar />
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Here..."
        />
       
      </div>

      <div className="wrapper">
        {filteredTasks.length === 0
          ? "No tasks"
          : filteredTasks.map((task, index) => (
              <div className="box" key={index}>
                <div className="task-header">
                  <h4>Title: {task.title}</h4>
                  <span
                    className="delete-icon"
                    onClick={() => handleDelete(task.id)}
                  >
                    <MdDelete />
                  </span>
                </div>
                <p>{task.content}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ShowTask;
