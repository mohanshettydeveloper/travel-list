import React from "react";
function Stats({ items }) {
  //This is an example of early return to avoid unnecessary processing
  if (items.length === 0) {
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  //Below variables is an example of Derived State
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
