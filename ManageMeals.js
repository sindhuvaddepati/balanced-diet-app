import React, { useState } from "react";
import Papa from "papaparse";

const styles = {
  container: {
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff7f0",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#a0522d",
    marginBottom: "20px",
  },
  filterRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "200px",
    backgroundColor: "#fffaf5",
    fontWeight: "500",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#ffeadb",
    color: "#5a3d2b",
    fontWeight: "bold",
    padding: "12px",
    borderBottom: "2px solid #f4d2ba",
  },
  td: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #f0e2d0",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  primaryBtn: {
    backgroundColor: "#f28c28",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#ffc48c",
    color: "#5a3d2b",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  editBtn: {
    backgroundColor: "#ffa94d",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  },
  deleteBtn: {
    backgroundColor: "#f25c54",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  popupContent: {
    backgroundColor: "#fffaf5",
    padding: "30px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "10px",
    textAlign: "center",
  },
};

const ManageMeals = () => {
  const [meals, setMeals] = useState([
    { id: 1, name: "Grilled Chicken Salad", calories: 350, type: "Lunch", category: "Non-Veg" },
    { id: 2, name: "Oatmeal with Fruits", calories: 250, type: "Breakfast", category: "Veg" },
    { id: 3, name: "Spaghetti Bolognese", calories: 500, type: "Dinner", category: "Non-Veg" },
    { id: 4, name: "Pancakes", calories: 300, type: "Breakfast", category: "Veg" },
    { id: 5, name: "Chicken Caesar Salad", calories: 400, type: "Lunch", category: "Non-Veg" },
    { id: 6, name: "Beef Steak", calories: 600, type: "Dinner", category: "Non-Veg" },
    { id: 7, name: "Vegetable Stir Fry", calories: 200, type: "Lunch", category: "Veg" },
    { id: 8, name: "Vegetable Soup", calories: 150, type: "Dinner", category: "Veg" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newMeal, setNewMeal] = useState({ name: "", calories: "", type: "", category: "" });
  const [editMealIndex, setEditMealIndex] = useState(null);
  const [error, setError] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  const handleChange = (e) => {
    setNewMeal({ ...newMeal, [e.target.name]: e.target.value });
  };

  const handleSaveMeal = () => {
    if (!newMeal.name || !newMeal.calories || !newMeal.type || !newMeal.category) {
      setError("All fields are required!");
      return;
    }

    const parsedCalories = parseInt(newMeal.calories);
    if (isNaN(parsedCalories)) {
      setError("Calories must be a number!");
      return;
    }

    setError("");
    if (editMealIndex !== null) {
      const updatedMeals = [...meals];
      updatedMeals[editMealIndex] = { ...newMeal, id: meals[editMealIndex].id, calories: parsedCalories };
      setMeals(updatedMeals);
    } else {
      setMeals([...meals, { ...newMeal, id: meals.length + 1, calories: parsedCalories }]);
    }
    setShowPopup(false);
    setNewMeal({ name: "", calories: "", type: "", category: "" });
    setEditMealIndex(null);
  };

  const handleEdit = (index) => {
    setNewMeal(meals[index]);
    setEditMealIndex(index);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this meal?")) {
      setMeals(meals.filter((meal) => meal.id !== id));
    }
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(meals);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "meals.csv";
    link.click();
  };

  const filteredMeals = meals.filter((meal) => {
    const matchesType = filterType === "All" || meal.type === filterType;
    const matchesCategory = filterCategory === "All" || meal.category === filterCategory;
    return matchesType && matchesCategory;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🍽️ Manage Meals</h2>

      <div style={styles.filterRow}>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={styles.select}>
          <option value="All">All Meal Types</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} style={styles.select}>
          <option value="All">All Categories</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Calories</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMeals.map((meal, index) => (
            <tr key={meal.id}>
              <td style={styles.td}>{meal.id}</td>
              <td style={styles.td}>{meal.name}</td>
              <td style={styles.td}>{meal.calories}</td>
              <td style={styles.td}>{meal.type}</td>
              <td style={styles.td}>{meal.category}</td>
              <td style={styles.td}>
                <button style={styles.editBtn} onClick={() => handleEdit(index)}>Edit</button>
                <button style={styles.deleteBtn} onClick={() => handleDelete(meal.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.buttonRow}>
        <button style={styles.primaryBtn} onClick={() => setShowPopup(true)}>+ Add Meal</button>
        <button style={styles.secondaryBtn} onClick={handleExportCSV}>Export to CSV</button>
      </div>

      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
              {editMealIndex !== null ? "Edit Meal" : "Add Meal"}
            </h3>
            {error && <p style={styles.error}>{error}</p>}
            <input name="name" placeholder="Meal Name" value={newMeal.name} onChange={handleChange} style={styles.input} />
            <input type="number" name="calories" placeholder="Calories" value={newMeal.calories} onChange={handleChange} style={styles.input} />
            <select name="type" value={newMeal.type} onChange={handleChange} style={styles.input}>
              <option value="">Select Meal Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <select name="category" value={newMeal.category} onChange={handleChange} style={styles.input}>
              <option value="">Select Meal Category</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={styles.primaryBtn} onClick={handleSaveMeal}>Save</button>
              <button style={styles.secondaryBtn} onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMeals;
