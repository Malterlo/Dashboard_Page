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
  { month: "Jan", users: 400 },
  { month: "Feb", users: 800 },
  { month: "Mar", users: 1200 },
  { month: "Apr", users: 1600 },
  { month: "May", users: 2000 },
  { month: "Jun", users: 2350 },
];

export default function Linechart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Users</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}