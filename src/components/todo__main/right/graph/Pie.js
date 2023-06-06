import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import TodoContext from "../../../../context/todo-context";

Chart.register(ArcElement);

const PieChart = () => {
  const { todo, totalTodo } = useContext(TodoContext);
  const doneTask = todo.reduce((acc, curr) => {
    if (curr.isChecked) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const data = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [totalTodo - doneTask, doneTask],
        backgroundColor: ["#FF2C24", "#49FF49 "],
        hoverBackgroundColor: ["#FF0800", "#24FF24"]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
