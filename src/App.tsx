import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import Home from "./pages/External/home";
import Contact from "./pages/External/contact";
import PrivacyPolicy from "./pages/External/privacy-policy";
import TermsOfService from "./pages/External/terms-of-services";
import Login from "./pages/External/Auth/Delivery/login";
import Register from "./pages/External/Auth/Delivery/register";
import ForgotPassword from "./pages/External/Auth/Delivery/forgot-password";
import ResetPassword from "./pages/External/Auth/Delivery/reset-password";
import DeliveryHome from "./pages/Internal/Delivery/home";
import Dashboard from "./pages/Internal/Delivery/dashboard";
import AvailableOrders from "./pages/Internal/Delivery/available-order";
import ActiveOrder from "./pages/Internal/Delivery/active-order";
import OrderHistory from "./pages/Internal/Delivery/order-history";
import Profile from "./pages/Internal/Delivery/profile";
import Notifications from "./pages/Internal/Delivery/notifications";
import AdminDashboard from "./pages/Internal/Admin/dashboard";
import AdminHome from "./pages/Internal/Admin/home";
import AddFood from "./pages/Internal/Admin/add-food";
import GetFood from "./pages/Internal/Admin/get-food";
import ManageDeliveryPerson from "./pages/Internal/Admin/manage-delivery-person";
import ManageOrder from "./pages/Internal/Admin/manage-order";
import ManageUser from "./pages/Internal/Admin/manage-user";
import AdminNotifications from "./pages/Internal/Admin/notifications";
import Settings from "./pages/Internal/Admin/settings";
import AdminLogin from "./pages/External/Auth/Admin/login";
import AdminRegister from "./pages/External/Auth/Admin/register";
import AdminForgotPassword from "./pages/External/Auth/Admin/forgot-password";
import AdminResetPassword from "./pages/External/Auth/Admin/reset-password";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfService />} />

          {/* This is the auth route for the Delivery Section */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* This is the auth route for the Delivery Section */}

          {/* This is the Delivery Internal Page */}
          <Route path="/delivery/dashboard" element={<Dashboard />}>
            <Route index element={<DeliveryHome />} />
            <Route path="available-orders" element={<AvailableOrders />} />
            <Route path="active-order" element={<ActiveOrder />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          {/* This is the Delivery Internal Page */}

          {/* This is the auth route for the Admin Section */}
          <Route path="/admin-food-ninja-login" element={<AdminLogin />} />
          <Route path="/admin-food-ninja-signup" element={<AdminRegister />} />
          <Route
            path="/admin-food-ninja-forgot-password"
            element={<AdminForgotPassword />}
          />
          <Route
            path="/admin-food-ninja-reset-password"
            element={<AdminResetPassword />}
          />
          {/* This is the auth route for the Admin Section */}

          {/* This is the admin Section */}
          <Route
            path="/admin/food-ninja/dashboard"
            element={<AdminDashboard />}
          >
            <Route index element={<AdminHome />} />
            <Route path="add-food" element={<AddFood />} />
            <Route path="get-food" element={<GetFood />} />
            <Route
              path="manage-delivery-person"
              element={<ManageDeliveryPerson />}
            />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route
              path="admin-notifications"
              element={<AdminNotifications />}
            />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* This is the admin Section */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
