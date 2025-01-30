"use client";

import { useOrderStore } from "@/store/admin-stroe/orders";
import axios from "axios";
import { useEffect } from "react";
import { KeyMetrics } from "@/components/admin-page/key-metrics";
import { ChartsGraphs } from "@/components/admin-page/charts-graphs";
import { RecentOrders } from "@/components/admin-page/recent-orders";
import { QuickAction } from "@/components/admin-page/quick-action";

const AdminHome = () => {
  const { order, setOrder } = useOrderStore();

  const url = import.meta.env.VITE_API_URL;

  const getOrders = async () => {
    try {
      const { data } = await axios(`${url}/customer/orders`);

      // console.log(data);
      setOrder(data.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(order);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#4CAF50] mb-8">
        Admin Dashboard
      </h1>

      {/* Key Metrics */}
      <KeyMetrics orderLength={order.length} />

      {/* Charts and Graphs */}
      <ChartsGraphs />

      {/* Recent Orders */}
      <RecentOrders order={order} />

      {/* Quick Actions */}
      <QuickAction />
    </div>
  );
};

export default AdminHome;
