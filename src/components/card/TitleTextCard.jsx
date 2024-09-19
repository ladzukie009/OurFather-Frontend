import React from "react";
import { Paper, Typography } from "@mui/material";

export default function TitleTextCard({ title, description }) {
  return (
    <>
      <Paper variant="outlined" elevation={2} style={{ padding: "16px" }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
      </Paper>
    </>
  );
}
