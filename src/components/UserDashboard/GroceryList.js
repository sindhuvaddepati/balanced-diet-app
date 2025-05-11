import React, { useState } from "react";
import "./GroceryList.css";

function GroceryList({ groceryItems }) {
  const [items, setItems] = useState(groceryItems.map(item => ({ name: item, bought: false })));
  const [searchTerm, setSearchTerm] = useState("");
  const [newItem, setNewItem] = useState("");

  // ✅ Categories
  const categories = {
    "Dairy Products": ["Milk", "Cheese", "Yogurt", "Butter"],
    "Fruits": ["Banana", "Strawberry", "Apple", "Orange"],
    "Vegetables": ["Lettuce", "Tomato", "Cucumber", "Garlic"],
    "Others": []
  };

  // ✅ Suggested common items if not in list
  const commonSuggestions = ["Salt", "Pepper", "Olive Oil", "Onion", "Rice"];
  const currentItems = items.map(item => item.name.toLowerCase());
  const suggestions = commonSuggestions.filter(item => !currentItems.includes(item.toLowerCase()));

  // ✅ Categorizing Items
  const categorizedItems = {
    "Dairy Products": [],
    "Fruits": [],
    "Vegetables": [],
    "Others": []
  };

  items.forEach((item) => {
    let found = false;
    for (const category in categories) {
      if (categories[category].includes(item.name)) {
        categorizedItems[category].push(item);
        found = true;
        break;
      }
    }
    if (!found) {
      categorizedItems["Others"].push(item);
    }
  });

  const toggleBought = (itemName) => {
    setItems(prev =>
      prev.map(item =>
        item.name === itemName ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (itemName) => {
    setItems(items.filter((item) => item.name !== itemName));
  };

  const clearList = () => {
    setItems([]);
  };

  const addItem = () => {
    const trimmed = newItem.trim();
    if (trimmed && !items.find(i => i.name.toLowerCase() === trimmed.toLowerCase())) {
      setItems([...items, { name: trimmed, bought: false }]);
      setNewItem("");
    }
  };

  const filteredItems = searchTerm
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items;

  return (
    <div className="grocery-container">
      <h2 className="grocery-heading">🛒 Grocery List</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="add-item-section">
        <input
          type="text"
          className="new-item-input"
          placeholder="➕ Add custom item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>Add</button>
      </div>

      {Object.keys(categorizedItems).map(
        (category) =>
          categorizedItems[category].length > 0 && (
            <div key={category} className="category-container">
              <h3 className="category-title">{category}</h3>
              <ul>
                {categorizedItems[category]
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((item, index) => (
                    <li key={index} className="grocery-item">
                      <input
                        type="checkbox"
                        checked={item.bought}
                        onChange={() => toggleBought(item.name)}
                      />
                      <span className={item.bought ? "bought" : ""}>{item.name}</span>
                      <button className="remove-btn" onClick={() => removeItem(item.name)}>
                        ✖
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          )
      )}

      {items.length > 0 && (
        <button className="clear-btn" onClick={clearList}>Clear List</button>
      )}

      {/* Suggested Items Section */}
      {suggestions.length > 0 && (
        <div className="suggestions">
          <h4>🔔 Suggestions you might need:</h4>
          <ul>
            {suggestions.map((item, index) => (
              <li key={index} className="suggestion-item">
                {item}
                <button onClick={() => setItems([...items, { name: item, bought: false }])}>
                  ➕ Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GroceryList;
