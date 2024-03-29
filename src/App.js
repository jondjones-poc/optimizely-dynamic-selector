import { useState } from "react";
import "./App.css";
import GoalInput from "./Components/GoalInput/GoalInput";
import GoalList from "./Components/GoalList/GoalList";

function App() {
  const [newyeargoals, setNewYearGoals] = useState([
    { text: "Start new react course.", id: Math.random().toString() },
    {
      text: "Excerise daily for 30 mintues atleast.",
      id: Math.random().toString(),
    },
  ]);

  const addNewGoalHandler = (enteredText) => {
    setNewYearGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deletelHandler = (goalID) => {
    setNewYearGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalID);
      return updatedGoals;
    });
  };


  return (
    <>
      <section id="goal-form" >
        <GoalInput onAddNewGoal={addNewGoalHandler} data-name="GoalInput" />
      </section>
      <section id="goals" className="mySection">
        {/* Goals List */}
        <GoalList items={newyeargoals} onDeleteItem={deletelHandler} data-name="GoalList"/>
      </section>
      <div className="footer">
        Footer
      </div>
      </>
  );
}

export default App;
