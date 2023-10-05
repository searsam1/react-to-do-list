import { useState } from "react";
import "./list.css"

function List(props) {

    const { tasks } = props;
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState(tasks);

    const addTask = () => {
        if (task !== "") {
            setTaskList((prev) => [...prev, task]);
            setTask("");
        }
    }

    const removeTask = (index) => {
        setTaskList((prev) => prev.filter((_, i) => i !== index));
    }

    const clearTasks = () => {
        setTaskList([]);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
    }

    return (
        <>
            <div className="list">
                <input
                    onChange={({ target }) => setTask(target.value)}
                    value={task}
                    placeholder="task"
                    onKeyDown={handleKeyDown}
                />
                <button className="addBtn"
                    onClick={addTask}>+
                </button>
                <button className="clear"
                    onClick={clearTasks}>-
                </button>
                {taskList.map((t, index) => (
                    <p className="task" key={index}>
                        {toTitleCase(t)} <button className="removeBtn" onClick={() => removeTask(index)}>x</button>
                    </p>
                ))}
            </div>
        </>
    );
}

export default List;
