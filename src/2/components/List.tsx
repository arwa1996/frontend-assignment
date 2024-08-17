import { FunctionComponent } from "react";

// Components
import Item from "./Item";
import { IProduct } from "../utils/interfaces";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  data: Array<IProduct>
}

const List: FunctionComponent<ListProps> = (props) => {
  const { data } = props;

  return <div>
    <h2>Our List</h2>
    {data.length > 0 && data.map((itemData: IProduct) => <Item key={itemData.id} itemData={itemData} />)}
    {data.length === 0 && <h4>No Data Found...</h4>}
  </div>;
};

export default List;
