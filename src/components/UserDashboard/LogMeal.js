import React, { useState } from 'react';
import './LogMeal.css';
import { FaStar } from 'react-icons/fa';

function LogMeal({ onLogMeal }) {
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [mealMood, setMealMood] = useState('');
  const [saveAsFavorite, setSaveAsFavorite] = useState(false);
  const [mealTags, setMealTags] = useState('');
  const [mealRating, setMealRating] = useState(0);
  const [mealIngredients, setMealIngredients] = useState('');
  const [mealCategory, setMealCategory] = useState('Vegan');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [fiber, setFiber] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [nutritionSuggestion, setNutritionSuggestion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mealName || !calories || !mealTime) {
      setError('Please fill out all required fields.');
      return;
    }

    const meal = {
      mealName,
      calories: parseInt(calories, 10),
      mealTime,
      mealType,
      mealMood,
      saveAsFavorite,
      mealTags,
      mealRating,
      mealIngredients,
      mealCategory,
      waterIntake: parseInt(waterIntake, 10),
      nutrition: {
        protein: parseInt(protein, 10),
        carbs: parseInt(carbs, 10),
        fats: parseInt(fats, 10),
        fiber: parseInt(fiber, 10),
      },
    };

    onLogMeal(meal);

    setNutritionSuggestion(
      !fiber || fiber < 10
        ? "💡 You're low on fiber today. Try including beans, oats, or veggies."
        : "✅ Great job! Your fiber intake looks good."
    );

    setMealName('');
    setCalories('');
    setMealTime('');
    setMealType('Breakfast');
    setMealMood('');
    setSaveAsFavorite(false);
    setMealTags('');
    setMealRating(0);
    setMealIngredients('');
    setMealCategory('Vegan');
    setProtein('');
    setCarbs('');
    setFats('');
    setFiber('');
    setWaterIntake('');
    setError('');
  };

  return (
    <div className="logmeal-container">
      <h2 className="logmeal-title">🍽️ Log Your Meal</h2>
      {error && <p className="logmeal-error">{error}</p>}
      <form onSubmit={handleSubmit} className="logmeal-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Meal Name:</label>
            <input type="text" value={mealName} onChange={(e) => setMealName(e.target.value)} placeholder="E.g. Chicken Salad" />
          </div>
          <div className="form-group">
            <label>Calories:</label>
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="e.g. 300" />
          </div>
          <div className="form-group">
            <label>Meal Time:</label>
            <input type="time" value={mealTime} onChange={(e) => setMealTime(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Meal Type:</label>
            <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mood After Meal:</label>
            <select value={mealMood} onChange={(e) => setMealMood(e.target.value)}>
              <option value="">Select Mood</option>
              <option>😊 Happy</option>
              <option>😣 Bloated</option>
              <option>⚡ Energetic</option>
              <option>😴 Sleepy</option>
            </select>
          </div>
          <div className="form-group">
            <label>Save as Favorite:</label>
            <input type="checkbox" checked={saveAsFavorite} onChange={() => setSaveAsFavorite(!saveAsFavorite)} />
          </div>
          <div className="form-group">
            <label>Meal Tags:</label>
            <input type="text" value={mealTags} onChange={(e) => setMealTags(e.target.value)} placeholder="e.g. High Protein" />
          </div>
          <div className="form-group">
            <label>Meal Category:</label>
            <select value={mealCategory} onChange={(e) => setMealCategory(e.target.value)}>
              <option>Vegan</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Gluten-Free</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label>Meal Ingredients:</label>
            <textarea value={mealIngredients} onChange={(e) => setMealIngredients(e.target.value)} />
          </div>
          <div className="form-group full-width">
            <label>Nutrition (g):</label>
            <div className="nutrition-row">
              <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} placeholder="Protein" />
              <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="Carbs" />
              <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} placeholder="Fats" />
              <input type="number" value={fiber} onChange={(e) => setFiber(e.target.value)} placeholder="Fiber" />
            </div>
          </div>
          <div className="form-group">
            <label>Water Intake (ml):</label>
            <input type="number" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Meal Rating:</label>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="star"
                  color={i < mealRating ? "#ffc107" : "#ddd"}
                  onClick={() => setMealRating(i + 1)}
                />
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">Log Meal</button>
      </form>

      {nutritionSuggestion && <p className="nutrition-suggestion">{nutritionSuggestion}</p>}
    </div>
  );
}

export default LogMeal;
