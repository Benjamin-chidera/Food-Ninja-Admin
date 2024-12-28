import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/delivery/dashboard",
    icon: "🏠",
  },
  {
    title: "Available Orders",
    url: "/delivery/dashboard/available-orders",
    icon: "📋",
  },
  {
    title: "Active Order",
    url: "/delivery/dashboard/active-order",
    icon: "🚚",
  },
  {
    title: "Order History",
    url: "/delivery/dashboard/order-history",
    icon: "📜",
  },
  {
    title: "Profile",
    url: "/delivery/dashboard/profile",
    icon: "👤",
  },
  {
    title: "Notifications",
    url: "/delivery/dashboard/notifications",
    icon: "🔔",
  },
];

export function AppSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Delivery Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
