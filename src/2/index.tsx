import { ChangeEvent, FunctionComponent, useMemo, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { useDebounce } from "./hooks/useDebounce";



const INITIAL_LIST = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  },
  {
    "id": 11,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
  },
  {
    "id": 12,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
  }

]


const Task2: FunctionComponent = () => {
  const [listData, setListData] = useState(INITIAL_LIST);
  const [inputVal, setInputVal] = useState('');

  const debouncedSearchValue = useDebounce({ value: inputVal, delay: 750 });

  const filteredData = useMemo(() => listData.filter(item => {
    return item.title.toLowerCase().includes(debouncedSearchValue.toLowerCase());
  }), [debouncedSearchValue]);


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputVal(event.target.value);
  }

  return (
    <div>
      <Input  {...{ inputVal, handleInputChange }} />
      <br />
      <List data={filteredData} />
    </div>
  );
};

export default Task2;
