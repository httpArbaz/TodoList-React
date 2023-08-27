import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [ListItems, setListItems] = useState([]);
  const AddItems = (Text) => {
    if (Text !== "") setListItems([...ListItems, Text]);
  };

  const DeleteButton = (key) => {
    const NewList = [...ListItems];
    NewList.splice(key, 1);
    setListItems([...NewList]);
  };

  return (
    <>
      <h3 className="todo-h">TODOLIST</h3>
      <Input AddItems={AddItems} />
      <hr style={{ width: "650px" }} />
      {ListItems.map((Items, i) => {
        return (
          <List Items={Items} DeleteButton={DeleteButton} Index={i} key={i} />
        );
      })}
    </>
  );
}

export default App;
