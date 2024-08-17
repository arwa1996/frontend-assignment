import { FunctionComponent } from "react";
import { IProduct } from "../utils/interfaces";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  itemData: IProduct
}

const Item: FunctionComponent<ItemProps> = (props) => {
  const { itemData } = props;
  return <li>
    {itemData?.title} - <span style={{ color: '#666666', fontSize: '.75rem' }}>{itemData?.description}</span>
    <br />
    {/* <img src={itemData.thumbnail} width={100} height={100} alt={itemData?.title} style={{display:'flex',margin:'auto'}} /> */}
  </li>;
};

export default Item;
