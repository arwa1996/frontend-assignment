import { FunctionComponent } from "react";
import { ITodo } from "../utils/interfaces";
import MainImage from "./shared/UI/MainImage";


interface ItemProps {
  itemData: ITodo,
  handleTodoStatusChanged: (id: string) => void,
  handleDeleteTodo: (id: string) => void
}

const Item: FunctionComponent<ItemProps> = (props) => {
  const { itemData, handleTodoStatusChanged, handleDeleteTodo } = props;
  
  return <li className="todo-item">
    -  {itemData?.text}
    <div className="todo-actions">
      {/* Todo Update - Pending | Done */}
      <input type="checkbox" checked={itemData.done} onChange={() => handleTodoStatusChanged(itemData.id)} />

      {/* Delete Todo */}
      <div className="delete-todo" onClick={() => handleDeleteTodo(itemData.id)}>
        <MainImage name="delete-button.svg" alt='delete' width={20} />
      </div>
    </div>
  </li>;
};

export default Item;
