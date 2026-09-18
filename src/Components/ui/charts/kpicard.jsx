import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KpiCard({ title, value, change, icon: Icon }) {
  const isPositive = change?.startsWith("+");

  return (
    <Card className="h-full w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={`flex items-center gap-1 text-xs mt-1 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}