import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Cookies from "js-cookie";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saveditems = Cookies.get("savedItems");
    if (saveditems) {
      const parseditems = JSON.parse(saveditems);
      setItems(parseditems);
    }
  }, []);
  function addItem(x) {
    const updateditems = [...items, x];
    setItems(updateditems);
    Cookies.set("savedItems", JSON.stringify(updateditems), {
      expires: 365 * 10
    });
  }

  function deleteItem(id) {
    const updateditems = items.filter((item, index) => {
      return index !== id;
    });
    setItems(updateditems);
    Cookies.set("savedItems", JSON.stringify(updateditems), {
      expires: 365 * 10
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addit={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
