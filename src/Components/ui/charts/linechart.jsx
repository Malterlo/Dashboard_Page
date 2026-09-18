import { Card, CardHeader, CardTitle, CardContent } from "../card.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 18400 },
  { month: "Feb", sales: 22100 },
  { month: "Mar", sales: 19850 },
  { month: "Apr", sales: 25700 },
  { month: "May", sales: 29400 },
  { month: "Jun", sales: 27650 },
  { month: "Jul", sales: 31800 },
  { month: "Aug", sales: 35200 },
  { month: "Sep", sales: 33400 },
  { month: "Oct", sales: 38900 },
  { month: "Nov", sales: 44750 },
  { month: "Dec", sales: 52100 },
];

export default function Linechart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
      </CardHeader>
      <CardContent className="bg-[#2e3440]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#4c566a" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#d8dee9" tick={{ fill: "#d8dee9" }} />
            <YAxis
              stroke="#d8dee9"
              tick={{ fill: "#d8dee9" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ stroke: "#81a1c1" }}
              contentStyle={{
                backgroundColor: "#eceff4",
                border: "1px solid #4c566a",
                borderRadius: "6px",
                color: "#2e3440",
              }}
              labelStyle={{ color: "#2e3440" }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#88c0d0"
              strokeWidth={3}
              dot={{ fill: "#88c0d0", r: 4 }}
              activeDot={{ fill: "#a3be8c", r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}