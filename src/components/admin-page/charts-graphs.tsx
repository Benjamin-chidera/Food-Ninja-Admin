import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users } from "lucide-react";

export const ChartsGraphs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart className="h-16 w-16 text-[#4CAF50]" />
              <p className="ml-4 text-sm text-gray-500">
                Revenue chart placeholder
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
              <Users className="h-16 w-16 text-[#4CAF50]" />
              <p className="ml-4 text-sm text-gray-500">
                User growth chart placeholder
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
