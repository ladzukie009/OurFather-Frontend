import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import AdminProfile from "./pages/admin/Profile";
import Dashboard from "./pages/super_admin/Dashboard";
import {
  ProtectedRoutes,
  AdminProtectedRoutes,
  SuperAdminProtectedRoutes,
} from "./utils/ProtectedRoutes";
import ListOfUser from "./pages/super_admin/ListOfUser";
import { useAuthContext } from "./context/AuthContext";
// import UserDashboard from "./pages/user/Dashboard";
import UserDashboard from "./pages/user/Dashboard2";
import MyPlans from "./pages/user/Plan";
import Reservation from "./pages/user/Reservation";

function App() {
  const { authUser } = useAuthContext();
  return (
    <Router>
      <Routes>
        {/* USER ROUTES */}
        <Route element={<ProtectedRoutes />}></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={
            authUser && authUser.role === "user" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/my-plans"
          element={
            authUser && authUser.role === "user" ? (
              <MyPlans />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/reservation"
          element={
            authUser && authUser.role === "user" ? (
              <Reservation />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/register"
          element={
            authUser ? <Navigate to="/dashboard" /> : <RegistrationPage />
          }
        />

        {/* ADMIN ROUTES */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<SuperAdminProtectedRoutes />}>
          <Route
            path="/admin/dashboard"
            element={
              authUser && authUser.role === "admin" ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/users" element={<ListOfUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
