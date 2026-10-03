import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md border border-(--chart-grid) bg-(--chart-tooltip-background) px-3 py-2 text-xs text-(--chart-tooltip-foreground) shadow-md">
      <p className="mb-1 font-semibold">{payload[0].payload.name}</p>
      {payload.map((entry) => (
        <p key={entry.name}>
          {entry.name}: {Number(entry.value).toLocaleString()} units
        </p>
      ))}
    </div>
  );
}

export default function Pichart({ compare = false }) {
  const data = [
    { name: 'Fender', value: 420, previousValue: 392 },
    { name: 'Gibson', value: 326, previousValue: 312 },
    { name: 'Squier', value: 286, previousValue: 306 },
    { name: 'Taylor', value: 202, previousValue: 201 },
  ];
  const colors = ['#5e81ac', '#88c0d0', '#8fbcbb', '#a3be8c'];
  const total = data.reduce((sum, brand) => sum + brand.value, 0);
  const previousTotal = data.reduce((sum, brand) => sum + brand.previousValue, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by product brand</CardTitle>
        <p className="text-sm text-muted-foreground">
          {total.toLocaleString()} units
          {compare && ` · ${previousTotal.toLocaleString()} previous period`}
        </p>
      </CardHeader>
      <CardContent className="bg-(--chart-surface) py-4 text-(--chart-text)">
        <div className="grid min-w-0 grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(128px,0.9fr)]">
          <div className="h-62.5 min-w-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="48%"
                outerRadius="78%"
                paddingAngle={2}
                dataKey="value"
                name="Current period"
              >
                {data.map((entry, index) => (
                  <Cell key={`current-${entry.name}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              {compare && (
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="28%"
                  outerRadius="44%"
                  paddingAngle={2}
                  dataKey="previousValue"
                  name="Previous period"
                >
                  {data.map((entry, index) => (
                    <Cell key={`previous-${entry.name}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              )}
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
            </ResponsiveContainer>
          </div>
          <dl className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-1">
            {data.map((brand, index) => {
              const change = ((brand.value - brand.previousValue) / brand.previousValue) * 100;
              const share = (brand.value / total) * 100;

              return (
                <div className="min-w-0 text-xs" key={brand.name}>
                  <dt className="flex items-center gap-2 font-medium">
                    <span
                      className="size-2.5 shrink-0 rounded-sm"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    />
                    <span className="truncate">{brand.name}</span>
                  </dt>
                  <dd className="mt-1 pl-4.5 text-(--chart-text)/75 tabular-nums">
                    {brand.value} units · {share.toFixed(0)}%
                  </dd>
                  {compare && (
                    <dd className="pl-4.5 text-(--chart-text)/75 tabular-nums">
                      <span>{brand.previousValue} prior · </span>
                      <span className={change >= 0 ? "text-[#a3be8c]" : "text-[#eb8e8e]"}>
                        {change >= 0 ? "+" : ""}{change.toFixed(1)}%
                      </span>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </CardContent>
    </Card>
  );
}
