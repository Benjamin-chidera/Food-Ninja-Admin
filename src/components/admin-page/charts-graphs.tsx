import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChartAdmin } from "./admin-lineChart";
import { BarChartAdmin } from "./admin-barChart";

export const ChartsGraphs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-full flex items-center justify-center bg-gray-100 rounded-md">
              <LineChartAdmin />
            </div>
          </CardContent>
        </Card>
        {/*  */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-full flex items-center justify-center bg-gray-100 rounded-md">
              <BarChartAdmin />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
