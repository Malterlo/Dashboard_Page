import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "../card.jsx";

export default function Pichart() {
  const data = [
    { name: 'Fender', value: 400 },
    { name: 'Gibson', value: 300 },
    { name: 'Squire', value: 300 },
    { name: 'Taylor', value: 200 },
  ];
  const colors = ['#5e81ac', '#88c0d0', '#8fbcbb', '#a3be8c'];

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Pie Chart Example</CardTitle>
      </CardHeader>
        <CardContent className="bg-[#2e3440]">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </CardContent>
      </Card>
    </>
    );
  };
