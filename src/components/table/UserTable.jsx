import * as React from "react";
import ReusableTable from "./ReusableTable";

const columns = [
  { id: "firstName", label: "Firstname" },
  { id: "lastName", label: "Lastname" },
  { id: "email", label: "Email" },
  { id: "mobileNo", label: "Mobile no" },
  { id: "gender", label: "Gender" },
];

export default function UserTable() {
  const fetchData = async (page, rowsPerPage) => {
    const response = await fetch("http://localhost:5000/api/admin/all-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    });
    const result = await response.json();
    return {
      data: result.users,
      total: result.users.length,
    };
  };

  return (
    <>
      <ReusableTable
        columns={columns}
        fetchData={fetchData}
        title="User Table"
      />
    </>
  );
}
