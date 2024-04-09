import { useState } from "react";

const AddNewTask = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChangeInputValue = (e) => {
        // console.log("event: ", e.target.value);
        setInputValue(e.target.value);
    }
    const handleAddTask = () => {
        if (inputValue.trim().length > 0) {
            props.addTask(inputValue);
            setInputValue('');
        }
        else {
            alert("Please enter task");
        }

    }
    return (
        <div className="todo-input-container">
            {/* State za input mora biti lokalnog tipa */}
            <input
                type="text"
                value={inputValue}
                onChange={handleChangeInputValue}
                placeholder="New task name..." />
            <input
                className="btn"
                type="button"
                value="Add new task"
                disabled={inputValue.trim().length === 0}
                onClick={handleAddTask} />
        </div>
    );
}
export default AddNewTask;