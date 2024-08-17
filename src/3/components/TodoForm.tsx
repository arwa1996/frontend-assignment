import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import MainInput from "./shared/controls/MainInput";


interface TodoFormProps {
  addTodo: (value: string) => void,
  setInputSearch: (value: string) => void,
  inputSearch: string
}

const TodoForm: FunctionComponent<TodoFormProps> = ({ addTodo, setInputSearch, inputSearch }) => {
  const [value, setValue] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  };


  return (
    <div className="todo-header">
      <form className="todo-form" onSubmit={handleSubmit}>
        <MainInput type="text" value={value} onChange={handleInputChange} placeholder='Write your tasks...' />
        <button type="submit" className='todo-btn' disabled={!value}>Add Task</button>
      </form>

      {/* Todo Search */}
      <MainInput type="search" value={inputSearch} onChange={(e) => {
        setInputSearch(e.target.value)
      }} placeholder='Search...' className="search-input" />
    </div>
  )
};

export default TodoForm;
