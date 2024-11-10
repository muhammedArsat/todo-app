import React, { useState } from "react";
import "./Task.css";
import { db } from "../database/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Task() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, content };
    await addDoc(collection(db, "tasks"), task);
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <h2>Create New Task</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="label-content">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title..."
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="label-content">
              <label htmlFor="note">Note</label>
              <textarea
                name="message"
                placeholder="Add your task..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button className="btn-create" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Task;
