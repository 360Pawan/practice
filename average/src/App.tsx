import { taskData } from "./data";

import "./App.css";
import { Chart } from "./Chart";

export type TaskType = {
  completedTask: number;
  notCompletedTask: number;
  date: number;
};

function App() {
  const filteredData = taskData.reduce((acc: TaskType[], curr: TaskType) => {
    const existingEntry = acc.find((el: TaskType) => el.date === curr.date);

    if (existingEntry) {
      existingEntry.completedTask += curr.completedTask;
      existingEntry.notCompletedTask += curr.notCompletedTask;
    } else {
      acc.push({ ...curr });
    }

    return acc;
  }, []);

  console.table(filteredData);

  return (
    <div style={{ width: 700, height: 500 }}>
      <Chart data={filteredData} />
    </div>
  );
}

export default App;
