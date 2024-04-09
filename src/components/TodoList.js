import { DeleteOutlined } from "@ant-design/icons"
const TodoList = (props) => {

    const handleDeleteTask = (i) => {
        // console.log("handleDeleteTask", i);
        props.deleteTask(i);
    }

    return (
        <ul className="todo-list">
            {props.todos.map((todo, i) => {
                return (
                    <li key={i}>
                        {todo}
                        <DeleteOutlined
                            onClick={() => handleDeleteTask(i)}
                            className="delete-icon" />
                    </li>

                );
            })
            }
        </ul>
    );
}
export default TodoList;