import React, { useState } from 'react';

function TrackProgress() {
  const [mood, setMood] = useState(null);

  const data = {
    calories: 78,
    protein: 60,
    carbs: 90,
    fats: 45,
    hydration: 70,
    streak: 5,
    weeklyCalories: [2200, 2400, 2500, 2300, 2000, 2100, 1900],
  };

  const handleMoodSelect = (emoji) => {
    setMood(emoji);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📈 Track Your Progress</h2>
      <p style={styles.subtitle}>Visualize your nutrient intake and hydration goals</p>

      {/* Nutrient Bars */}
      {[
        { label: 'Calories', value: data.calories, color: '#fca311' },
        { label: 'Proteins', value: data.protein, color: '#f77f00' },
        { label: 'Carbs', value: data.carbs, color: '#f65c3e' },
        { label: 'Fats', value: data.fats, color: '#f9844a' },
        { label: 'Hydration', value: data.hydration, color: '#f4a261' },
      ].map((item, i) => (
        <div key={i} style={styles.metricContainer}>
          <label style={styles.metricLabel}>{item.label}</label>
          <div style={styles.barBg}>
            <div style={{ ...styles.barFill, width: `${item.value}%`, background: item.color }}></div>
          </div>
          <span>{item.value}%</span>
        </div>
      ))}

      {/* Mood Selector */}
      <div style={styles.moodContainer}>
        <h4 style={styles.sectionTitle}>How are you feeling today?</h4>
        <div>
          {['😄', '😊', '😐', '😔', '😩'].map((emoji, index) => (
            <span
              key={index}
              style={{
                fontSize: 30,
                margin: '0 10px',
                cursor: 'pointer',
                filter: mood === emoji ? 'grayscale(0%)' : 'grayscale(80%)',
              }}
              onClick={() => handleMoodSelect(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        {mood && <p style={{ marginTop: 10 }}>You selected: {mood}</p>}
      </div>

      {/* Streak */}
      <div style={styles.streakBox}>
        🔥 <strong>{data.streak}</strong> day healthy eating streak!
      </div>

      {/* Weekly Chart */}
      <div style={styles.chartSection}>
        <h4 style={styles.sectionTitle}>📅 Weekly Calorie Chart</h4>
        <div style={styles.chartContainer}>
          {data.weeklyCalories.map((cal, index) => (
            <div key={index} style={styles.chartBarWrapper}>
              <div
                style={{
                  ...styles.chartBar,
                  height: `${(cal / 2500) * 100}px`,
                  backgroundColor: '#ffb703',
                }}
              ></div>
              <span style={styles.chartLabel}>Day {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestion */}
      <div style={styles.suggestion}>
        💡 Tip: Keep carbs in check and hydrate consistently for better focus!
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    background: '#fff1e6',
    borderRadius: '15px',
    padding: '30px',
    margin: '30px auto',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    color: '#c24e00',
    marginBottom: 5,
  },
  subtitle: {
    color: '#444',
    fontSize: '14px',
    marginBottom: '30px',
  },
  metricContainer: {
    marginBottom: '15px',
  },
  metricLabel: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  barBg: {
    background: '#ffe8d6',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '15px',
    marginBottom: '5px',
  },
  barFill: {
    height: '100%',
    borderRadius: '8px 0 0 8px',
    transition: 'width 0.5s ease-in-out',
  },
  moodContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  sectionTitle: {
    marginBottom: '10px',
    color: '#333',
  },
  streakBox: {
    background: '#ffe0b2',
    padding: '10px',
    marginTop: '25px',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize: '16px',
  },
  chartSection: {
    marginTop: '30px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '150px',
    marginTop: '20px',
    backgroundColor: '#fff3e6',
    borderRadius: '10px',
    padding: '10px',
  },
  chartBarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartBar: {
    width: '20px',
    borderRadius: '5px 5px 0 0',
  },
  chartLabel: {
    fontSize: '12px',
    marginTop: '5px',
  },
  suggestion: {
    backgroundColor: '#ffd7ba',
    padding: '15px',
    borderRadius: '10px',
    marginTop: '30px',
    textAlign: 'center',
    color: '#7c4700',
  },
};

export default TrackProgress;
