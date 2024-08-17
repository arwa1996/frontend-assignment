import { FunctionComponent } from "react";

// Components
import { ITodo } from "../utils/interfaces";
import Item from "./Item";


interface ListProps {
    data: Array<ITodo>,
    setTodoList: (todoList: Array<ITodo>) => void,
    inputSearch: string,
    searchResult: Array<ITodo>,
}

const TodoList: FunctionComponent<ListProps> = (props) => {
    const { data, setTodoList, inputSearch, searchResult } = props;

    const pendingTasks = data.filter((item: ITodo) => !item.done);
    const doneTasks = data.filter((item: ITodo) => item.done);
    
    function handleTodoStatusChanged(id: string) {
        const updatedTodos = [...data];
        const selectedItemIndex = updatedTodos.findIndex(item => item.id === id);
        updatedTodos[selectedItemIndex] = {
            ...updatedTodos[selectedItemIndex],
            done: !updatedTodos[selectedItemIndex].done
        };
        setTodoList(updatedTodos)
    };


    function handleDeleteTodo(id: string) {
        const updatedTodos = [...data];
        const selectedItemIndex = updatedTodos.findIndex(item => item.id === id);
        updatedTodos.splice(selectedItemIndex, 1)
        setTodoList(updatedTodos)
    };


    return <div className="todo-list_container">
        {/* In Case No Tasks */}
        {data.length === 0 && <h5 className="info">Add your first task...</h5>}

        {/* In Case there are tasks */}
        {data.length > 0 && <>

            {/* Search Result */}
            {inputSearch && <>
                <h4 className="title">Search Results</h4>
                {searchResult?.length > 0 ? <div className="search-results">
                    <ul>
                        {searchResult.map((itemData: ITodo) => <Item key={itemData.id}
                            {...{ itemData, handleTodoStatusChanged, handleDeleteTodo }}
                        />)}
                    </ul>
                </div> : <h5 className="info">No tasks found contain (<strong>{inputSearch}</strong>)...</h5>}
                <hr />
                <br />
            </>}

            {/* Pending Tasks */}
            <div className="pending-tasks">
                <h4 className="title"> Pending Tasks</h4>
                <ul>
                    {pendingTasks.length > 0 ? pendingTasks.map((itemData: ITodo) => <Item key={itemData.id}
                        {...{ itemData, handleTodoStatusChanged, handleDeleteTodo }}
                    />) : <h5 className="info">There are no pending tasks...</h5>}
                </ul>
            </div>
            <hr />

            {/* Done Tasks */}
            <div className="done-tasks">
                <h4 className="title"> Done Tasks</h4>
                <ul>
                    {doneTasks.length > 0 ? doneTasks.map((itemData: ITodo) => <Item key={itemData.id}
                        {...{ itemData, handleTodoStatusChanged, handleDeleteTodo }}
                    />) : <h5 className="info">There are no done tasks...</h5>}
                </ul>
            </div>

        </>}
    </div>;
};

export default TodoList;
