import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackingList from "./PackingList";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  // const [items, setItems] = useState([initialItems]);
  const [items, setItems] = useState([]);
  // below function is an example of lifting state up and inverse data flow.
  // here, I am managing the items state in the parent component but that data
  // is available for both Form and PackingList component.
  // Managed in App, modified in Form, displayed in PackingList.
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure to clear all items");
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
