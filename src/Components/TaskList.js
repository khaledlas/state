import React from "react";
import "./TaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({ taskList, deleteTask }) => {
  // console.log(taskList);
  return (
    <div>
      {taskList.length === 0
        ? "Aucune tache"
        : taskList.map((task) => (
            <div className="list" key={task.id}>
              <input defaultValue={task.text} />
              <span>
                <FontAwesomeIcon
                  className="faicons"
                  onClick={() => deleteTask(task.id)}
                  icon={faTrash}
                />
              </span>
            </div>
          ))}
    </div>
  );
};

export default TaskList;
