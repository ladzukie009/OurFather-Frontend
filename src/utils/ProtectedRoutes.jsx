import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

const AdminProtectedRoutes = () => {
  const admin = true;
  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};

const SuperAdminProtectedRoutes = () => {
  const super_admin = true;
  return super_admin ? <Outlet /> : <Navigate to="/super_admin/login" />;
};

export { ProtectedRoutes, AdminProtectedRoutes, SuperAdminProtectedRoutes };
