import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Swal from "sweetalert2";
import ReusableSideBar from "./ReusableSideBar";

export default function UserSideNavigation() {
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
      text: "Plans / Loans",
      icon: <EventNoteIcon />,
      onClick: () => {
        navigate("/my-plans");
      },
    },
    {
      text: "My Reservations",
      icon: <StickyNote2Icon />,
      onClick: () => {
        navigate("/reservation");
      },
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      onClick: () => {
        // navigate("/users");
        alert("Page is not available yet");
      },
    },
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
      <ReusableSideBar items={sideNavItems} />
    </>
  );
}
