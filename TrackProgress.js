import React, { useState } from 'react';
import './TrackProgress.css';

function TrackProgress() {
  const [userProgress, setUserProgress] = useState({
    caloriesLogged: 2500,
    calorieGoal: 2000,
    protein: 120,
    carbs: 250,
    fats: 80,
    waterIntake: 1400,      // in ml
    waterGoal: 2000,        // daily goal
    moodToday: '😊 Happy',  // mood string or emoji
    streakDays: 4,
    progressData: [
      { date: '2025-03-01', calories: 2200 },
      { date: '2025-03-02', calories: 2400 },
      { date: '2025-03-03', calories: 2500 },
      { date: '2025-03-04', calories: 2300 },
      { date: '2025-03-05', calories: 2000 },
    ],
  });

  const {
    caloriesLogged,
    calorieGoal,
    protein,
    carbs,
    fats,
    waterIntake,
    waterGoal,
    moodToday,
    streakDays,
    progressData
  } = userProgress;

  const calorieProgress = ((caloriesLogged / calorieGoal) * 100).toFixed(2);
  const waterProgress = ((waterIntake / waterGoal) * 100).toFixed(2);

  // Smart suggestion logic
  let suggestions = [];
  if (protein < 60) suggestions.push("🔔 Increase your protein intake with eggs, legumes, or lean meats.");
  if (carbs > 300) suggestions.push("⚠️ Your carbs are high today, consider reducing sugary snacks.");
  if (fats > 100) suggestions.push("⚠️ Try cutting down on fats — opt for healthy oils.");
  if (waterIntake < 1500) suggestions.push("🚰 Drink more water to meet your hydration goal!");

  return (
    <div className="track-progress-container">
      <h2>📈 Track Your Progress</h2>

      {/* Daily Calorie Tracker */}
      <div className="track-progress-item">
        <h3>🔥 Today's Calories</h3>
        <p>{caloriesLogged} / {calorieGoal} kcal</p>
        <progress value={caloriesLogged} max={calorieGoal} className="progress-bar" />
        <p>{calorieProgress}% of your daily goal</p>
      </div>

      {/* Water Intake Tracker */}
      <div className="track-progress-item">
        <h3>💧 Water Intake</h3>
        <p>{waterIntake} / {waterGoal} ml</p>
        <progress value={waterIntake} max={waterGoal} className="progress-bar water" />
        <p>{waterProgress}% of your daily hydration goal</p>
      </div>

      {/* Mood */}
      <div className="track-progress-item">
        <h3>😊 Today's Mood</h3>
        <p>{moodToday}</p>
      </div>

      {/* Nutrient Breakdown */}
      <div className="track-progress-item">
        <h3>🥗 Nutrient Breakdown</h3>
        <p>Protein: {protein} g</p>
        <p>Carbs: {carbs} g</p>
        <p>Fats: {fats} g</p>
      </div>

      {/* Streak Tracker */}
      <div className="track-progress-item">
        <h3>🔥 Streak</h3>
        <p>You’ve logged your meals for <strong>{streakDays} days</strong> in a row. Keep going!</p>
      </div>

      {/* Smart Suggestions */}
      {suggestions.length > 0 && (
        <div className="track-progress-item suggestion-box">
          <h3>💡 Suggestions</h3>
          <ul>
            {suggestions.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Progress Over Time */}
      <div className="track-progress-item">
        <h3>📅 Progress Over Time</h3>
        <table className="progress-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {progressData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.calories} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrackProgress;
