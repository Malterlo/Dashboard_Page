import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { BarChart } from "@mui/x-charts/BarChart";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            height: 28,
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        height={300}
      />
    </>
  );
}

export default App;
