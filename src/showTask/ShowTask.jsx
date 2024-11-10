import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { db } from "../database/Firebase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import "./ShowTask.css";
import { MdDelete } from "react-icons/md";

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");



  const handleSearch = () =>{

    if(search.trim()===""){
      getAllTasks();
    }
    else{
      const filteredTask = tasks.filter(taks => 
        taks.title.toLowerCase().includes(search.toLowerCase())
      );
      setTasks(filteredTask);
    }

  }

  const getAllTasks = async () => {
    const allTasks = await getDocs(collection(db, "tasks"));
    setTasks(allTasks.docs.map((task) => ({ ...task.data(), id: task.id })));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    getAllTasks(); 
  };

  return (
    <div>
      <NavBar />
      <div className="search-container">
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="search Here..."/>
        <button className="btn-search" onClick={handleSearch} > 
          search
        </button>
      

      </div>

      <div className="wrapper">
        {tasks.length === 0
          ? "No tasks"
          : tasks.map((task, index) => {
              return (
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
              );
            })}
      </div>
    </div>
  );
}

export default ShowTask;
