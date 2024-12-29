import { Link } from "react-router";
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
    url: "/admin/food-ninja/dashboard",
    icon: "🏠",
  },
  {
    title: "Add Food",
    url: "/admin/food-ninja/dashboard/add-food",
    icon: "🍴",
  },
  {
    title: "Get All Food",
    url: "/admin/food-ninja/dashboard/get-food",
    icon: "🍴",
  },
  {
    title: "Manager Delivery Person",
    url: "/admin/food-ninja/dashboard/manage-delivery-person",
    icon: "🚚",
  },
  {
    title: "Manage Order",
    url: "/admin/food-ninja/dashboard/manage-order",
    icon: "📦",
  },
  {
    title: "Manage User",
    url: "/admin/food-ninja/dashboard/manage-user",
    icon: "👥",
  },
  {
    title: "Notifications",
    url: "/admin/food-ninja/dashboard/admin-notifications",
    icon: "🔔",
  },
  {
    title: "Settings",
    url: "/admin/food-ninja/dashboard/settings",
    icon: "⚙️",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
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
        <Button>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
