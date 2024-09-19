import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import {
  ButtonBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Swal from "sweetalert2";

export default function SideNavigation() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const sideNavItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => {
        navigate("/dashboard");
      },
    },
    {
      text: "Customers",
      icon: <PeopleIcon />,
      onClick: () => {
        navigate("/users");
      },
    },
    { text: "Reports", icon: <BarChartIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      onClick: () => {
        Swal.fire({
          title: "Are you sure you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("user");
            setAuthUser(null);
            navigate("/login");
          }
        });
      },
    },
  ];
  return (
    <>
      <List component="nav">
        {sideNavItems.map((item, index) => (
          <ListItem
            component={ButtonBase}
            onClick={item.onClick}
            key={index}
            style={{ fontSize: "2rem" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
