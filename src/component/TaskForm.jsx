import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = () => {
  // const [task, setTask] = useState("");

  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => setTask(e.target.value);
  // const handleStatusChange = (e) => setStatus(e.target.value);

  // console.log(task, " ", status);
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setTaskData((previous) => {
      return { ...previous, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JAVASCRIPT" />
            <Tag tagName="REACT" />
          </div>
          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task!!!
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
export default TaskForm;