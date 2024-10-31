import React from 'react';
import { BarChart, Users, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Total Users"
          value="12,345"
          trend="+12%"
          icon={<Users className="h-6 w-6" />}
        />
        <DashboardCard
          title="Revenue"
          value="$54,321"
          trend="+8%"
          icon={<BarChart className="h-6 w-6" />}
        />
        <DashboardCard
          title="Growth"
          value="23%"
          trend="+15%"
          icon={<TrendingUp className="h-6 w-6" />}
        />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}

function DashboardCard({ title, value, trend, icon }: DashboardCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-indigo-500 rounded-md p-3 text-white">
              {icon}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {trend}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}