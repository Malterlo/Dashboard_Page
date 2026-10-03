import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Linechart from "@/pages/dashboard/linechart";
import Pichart from "@/pages/dashboard/pichart";

const metrics = [
  {
    title: "Total revenue",
    value: "$45,231",
    change: "+20.1%",
    positive: true,
    icon: DollarSign,
    details: [
      ["Previous period", "$37,657"],
      ["Average order value", "$36.66"],
      ["Monthly target", "92% of $49,000"],
    ],
  },
  {
    title: "Active users",
    value: "2,350",
    change: "+15.3%",
    positive: true,
    icon: Users,
    details: [
      ["Previous period", "2,038"],
      ["New users", "412"],
      ["Returning users", "1,938"],
    ],
  },
  {
    title: "Sales",
    value: "1,234",
    change: "-3.2%",
    positive: false,
    icon: CreditCard,
    details: [
      ["Previous period", "1,275"],
      ["Online orders", "839 · 68%"],
      ["In-store orders", "395 · 32%"],
    ],
  },
  {
    title: "Active now",
    value: "573",
    change: "+2.1%",
    positive: true,
    icon: Activity,
    details: [
      ["Peak today", "641"],
      ["Average session", "8m 42s"],
      ["Returning visitors", "82.5%"],
    ],
  },
];

function MetricCard({ metric }) {
  const Icon = metric.icon;
  const ChangeIcon = metric.positive ? ArrowUpRight : ArrowDownRight;

  return (
    <Card className="h-full rounded-lg shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <CardDescription>{metric.title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {metric.value}
          </CardTitle>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-xs">
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              metric.positive ? "text-emerald-700" : "text-rose-700"
            }`}
          >
            <ChangeIcon className="size-3.5" aria-hidden="true" />
            {metric.change}
          </span>
          <span className="text-muted-foreground">vs previous period</span>
        </div>
        <dl className="space-y-2 border-t pt-3">
          {metric.details.map(([label, value]) => (
            <div className="flex items-center justify-between gap-3 text-xs" key={label}>
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="text-right font-medium tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsPage() {
  const [compareWithPrevious, setCompareWithPrevious] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Performance overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Revenue, customer activity, orders, and product mix.
          </p>
        </div>
        <label className="flex min-h-10 cursor-pointer items-center gap-2 rounded-md border bg-card px-3 text-sm font-medium shadow-sm">
          <input
            type="checkbox"
            checked={compareWithPrevious}
            onChange={(event) => setCompareWithPrevious(event.target.checked)}
            className="size-4 accent-sky-700"
          />
          Compare previous period
        </label>
      </div>

      <section aria-label="Key performance indicators" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </section>

      <section aria-label="Sales charts" className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
        <Linechart compare={compareWithPrevious} />
        <Pichart compare={compareWithPrevious} />
      </section>
    </div>
  );
}