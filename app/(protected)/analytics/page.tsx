import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Kaspa blockchain analytics and metrics",
};

// Sample data - replace with real Kaspa data later
const sampleData = [
  { date: "2024-01", price: 0.05, volume: 1000000 },
  { date: "2024-02", price: 0.08, volume: 1500000 },
  { date: "2024-03", price: 0.12, volume: 2000000 },
  { date: "2024-04", price: 0.15, volume: 2500000 },
  { date: "2024-05", price: 0.18, volume: 3000000 },
  { date: "2024-06", price: 0.22, volume: 3500000 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Kaspa Analytics</h1>
        <p className="text-muted-foreground">
          Real-time blockchain metrics and on-chain analysis
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0.22</div>
            <p className="text-xs text-muted-foreground">+12.5% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3.5M</div>
            <p className="text-xs text-muted-foreground">+8.2% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">+3.1% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hash Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 PH/s</div>
            <p className="text-xs text-muted-foreground">+5.7% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Price Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Price & Volume Chart</CardTitle>
          <CardDescription>
            Historical price and volume data for Kaspa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Future HODL Waves Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>HODL Waves</CardTitle>
          <CardDescription>
            Coming soon: Coin age distribution analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-muted-foreground">HODL Waves chart will be implemented here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
