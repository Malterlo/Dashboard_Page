import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 18400, previousSales: 16900 },
  { month: "Feb", sales: 22100, previousSales: 20400 },
  { month: "Mar", sales: 19850, previousSales: 18300 },
  { month: "Apr", sales: 25700, previousSales: 23000 },
  { month: "May", sales: 29400, previousSales: 26700 },
  { month: "Jun", sales: 27650, previousSales: 25300 },
  { month: "Jul", sales: 31800, previousSales: 29200 },
  { month: "Aug", sales: 35200, previousSales: 31900 },
  { month: "Sep", sales: 33400, previousSales: 30500 },
  { month: "Oct", sales: 38900, previousSales: 35600 },
  { month: "Nov", sales: 44750, previousSales: 40900 },
  { month: "Dec", sales: 52100, previousSales: 44700 },
];

const currentTotal = data.reduce((total, month) => total + month.sales, 0);
const previousTotal = data.reduce((total, month) => total + month.previousSales, 0);
const totalChange = ((currentTotal - previousTotal) / previousTotal) * 100;

export default function Linechart({ compare = false }) {
  return (
    <Card className="min-w-0">
      <CardHeader className="gap-1">
        <CardTitle>Monthly sales</CardTitle>
        <p className="text-sm text-muted-foreground">
          {`$${currentTotal.toLocaleString()} total revenue`}
          {compare && (
            <span>{` · Previous period $${previousTotal.toLocaleString()} (+${totalChange.toFixed(1)}%)`}</span>
          )}
        </p>
      </CardHeader>
      <CardContent className="h-[340px] min-w-0 bg-[var(--chart-surface)] pb-5 pt-4">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <LineChart data={data} margin={{ top: 8, right: 12, bottom: 4, left: 4 }}>
            <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="var(--chart-text)"
              tick={{ fill: "var(--chart-text)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              minTickGap={8}
            />
            <YAxis
              stroke="var(--chart-text)"
              tick={{ fill: "var(--chart-text)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={44}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ stroke: "var(--chart-accent)" }}
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-background)",
                border: "1px solid var(--chart-grid)",
                borderRadius: "6px",
                color: "var(--chart-tooltip-foreground)",
              }}
              labelStyle={{ color: "var(--chart-tooltip-foreground)" }}
              formatter={(value, name) => [`$${Number(value).toLocaleString()}`, name]}
            />
            {compare && (
              <Legend
                verticalAlign="top"
                align="right"
                height={32}
                wrapperStyle={{ color: "var(--chart-text)", fontSize: "12px" }}
              />
            )}
            <Line
              type="monotone"
              dataKey="sales"
              name="Current period"
              stroke="var(--chart-accent)"
              strokeWidth={3}
              dot={{ fill: "var(--chart-accent)", r: 3 }}
              activeDot={{ fill: "var(--chart-highlight)", r: 6 }}
            />
            {compare && (
              <Line
                type="monotone"
                dataKey="previousSales"
                name="Previous period"
                stroke="var(--chart-highlight)"
                strokeWidth={2}
                strokeDasharray="5 4"
                dot={false}
                activeDot={{ r: 5 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}