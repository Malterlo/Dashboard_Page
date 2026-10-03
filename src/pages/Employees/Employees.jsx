import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import employees from "./employee";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

function EmployeeCard({ employee, expanded, onToggle, onClose }) {
  const detailsId = `employee-details-${employee.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <div className={`relative min-w-0 ${expanded ? "z-30" : "z-0"}`}>
      <Card className="overflow-visible! p-0! rounded-lg shadow-sm">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          aria-label={`${expanded ? "Hide" : "Show"} details for ${employee.name}`}
          onClick={onToggle}
          className="block w-full cursor-pointer rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <img
            src={employee.idCardPhoto}
            alt={`ID photo of ${employee.name}`}
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full bg-muted object-cover"
          />
          <span className="flex min-w-0 items-center justify-between gap-2 rounded-b-lg px-4 py-3">
            <span className="truncate font-medium">{employee.name}</span>
            <ChevronDown
              aria-hidden="true"
              className={`size-4 shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </Card>
      {expanded && (
        <Card
          id={detailsId}
          className="absolute inset-x-0 top-[calc(100%-1px)] z-40 rounded-lg rounded-t-none border-t-0 shadow-xl"
        >
          <CardContent className="px-4 py-3">
            <div className="flex items-center justify-between gap-3 border-b pb-2">
              <span className="text-sm font-semibold">Employee details</span>
              <button
                type="button"
                aria-label={`Close details for ${employee.name}`}
                onClick={onClose}
                className="rounded-sm p-1 text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 pt-3 text-sm">
              <dt className="text-muted-foreground">Age</dt>
              <dd className="text-right font-medium">{employee.age}</dd>
              <dt className="text-muted-foreground">Role</dt>
              <dd className="text-right font-medium">{employee.role}</dd>
              <dt className="text-muted-foreground">Annual salary</dt>
              <dd className="text-right font-medium tabular-nums">
                {currencyFormatter.format(employee.salary)}
              </dd>
              <dt className="text-muted-foreground">Start date</dt>
              <dd className="text-right font-medium">
                {dateFormatter.format(new Date(`${employee.startDate}T00:00:00Z`))}
              </dd>
            </dl>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function EmployeesPage() {
  const [selectedRole, setSelectedRole] = useState("All roles");
  const [expandedEmployee, setExpandedEmployee] = useState(null);
  const roles = [...new Set(employees.map((employee) => employee.role))].sort();
  const filteredEmployees = selectedRole === "All roles"
    ? employees
    : employees.filter((employee) => employee.role === selectedRole);

  return (
    <section aria-label="Employees" className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Team directory</h2>
        <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
          <span className="text-sm text-muted-foreground">
            {filteredEmployees.length} of {employees.length} employees
          </span>
          <Select
            value={selectedRole}
            onValueChange={(role) => {
              setSelectedRole(role);
              setExpandedEmployee(null);
            }}
          >
            <SelectTrigger aria-label="Filter employees by role" className="w-48 bg-card">
              <SelectValue placeholder="All roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All roles">All roles</SelectItem>
              {roles.map((role) => (
                <SelectItem value={role} key={role}>{role}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            employee={employee}
            expanded={expandedEmployee === employee.name}
            onToggle={() => setExpandedEmployee((current) => current === employee.name ? null : employee.name)}
            onClose={() => setExpandedEmployee(null)}
          />
        ))}
      </div>
    </section>
  );
}