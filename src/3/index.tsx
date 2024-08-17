import { FunctionComponent, useEffect, useState } from "react";

// Style
import "./styles/index.scss";
import TodoForm from "./components/TodoForm";
import { ITodo } from "./utils/interfaces";

import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: FunctionComponent = () => {
  const [todoList, setTodoList] = useState<Array<ITodo>>([]);

  const [inputSearch, setInputSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Array<ITodo>>([]);


  function addTodo(newTodo: string) {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        text: newTodo,
        done: false
      }])
  };

// use useEffect to show the search result and make them updated with the actual todo data
  useEffect(() => {
    if (inputSearch) {
      const searchRes = todoList.filter((item: ITodo) => item.text.toLowerCase().includes(inputSearch.toLowerCase()));
      setSearchResult(searchRes)
    } else {
      setSearchResult([])
    }
  }, [inputSearch, todoList])



  return <div id="task-3">
    <div className="todo-container">
      {/* Todo form */}
      <TodoForm {...{ addTodo, inputSearch, setInputSearch }} />

      {/* Todo List */}
      <TodoList data={todoList} setTodoList={setTodoList} inputSearch={inputSearch} searchResult={searchResult} />
    </div>
  </div>;
};

export default Task3;
