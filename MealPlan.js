import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MealPlan.css";

function MealPlan({ setGroceryItems }) {
  const navigate = useNavigate();

  const meals = [
    { name: "Oatmeal with Milk", ingredients: ["Oats", "Milk", "Honey"], icon: "🥣" },
    { name: "Scrambled Eggs & Toast", ingredients: ["Eggs", "Bread", "Butter"], icon: "🍳" },
    { name: "Grilled Chicken Salad", ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Olive Oil"], icon: "🥗" },
    { name: "Pasta with Cheese", ingredients: ["Pasta", "Cheese", "Garlic"], icon: "🍝" },
    { name: "Fruit Smoothie", ingredients: ["Banana", "Strawberry", "Yogurt", "Honey"], icon: "🍓" },
    { name: "Avocado Toast", ingredients: ["Avocado", "Bread", "Eggs", "Olive Oil"], icon: "🥑" },
    { name: "Vegetable Stir Fry", ingredients: ["Carrot", "Bell Peppers", "Broccoli", "Soy Sauce", "Garlic"], icon: "🥦" },
    { name: "Quinoa Bowl", ingredients: ["Quinoa", "Spinach", "Cherry Tomatoes", "Feta Cheese", "Lemon"], icon: "🍲" }
  ];

  const [selectedMeals, setSelectedMeals] = useState([]);
  const [toast, setToast] = useState("");

  const handleMealSelection = (mealName) => {
    setSelectedMeals((prevSelected) =>
      prevSelected.includes(mealName)
        ? prevSelected.filter((name) => name !== mealName)
        : [...prevSelected, mealName]
    );
  };

  const generateGroceryList = () => {
    if (selectedMeals.length === 0) return;

    const allIngredients = new Set();
    meals
      .filter((meal) => selectedMeals.includes(meal.name))
      .forEach((meal) => meal.ingredients.forEach((ingredient) => allIngredients.add(ingredient)));

    const groceryList = Array.from(allIngredients);
    setGroceryItems(groceryList);
    setToast("✅ Grocery List Generated!");
    setTimeout(() => {
      setToast("");
      navigate("/user/grocery-list");
    }, 1500);
  };

  const totalMeals = meals.length;
  const selectedCount = selectedMeals.length;
  const progress = (selectedCount / totalMeals) * 100;

  return (
    <div className="meal-container">
      <h2>🍽️ Select Your Meals</h2>

      <div className="status-bar">
        <span>Meals Selected: {selectedCount}/{totalMeals}</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <ul className="meal-list">
        {meals.map((meal, index) => (
          <li key={index} className={`meal-item ${selectedMeals.includes(meal.name) ? "selected" : ""}`}>
            <label>
              <input
                type="checkbox"
                checked={selectedMeals.includes(meal.name)}
                onChange={() => handleMealSelection(meal.name)}
              />
              <span className="icon">{meal.icon}</span>
              {meal.name}
            </label>
          </li>
        ))}
      </ul>

      <button
        className="generate-btn"
        onClick={generateGroceryList}
        disabled={selectedMeals.length === 0}
      >
        🛒 Generate Grocery List
      </button>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default MealPlan;
