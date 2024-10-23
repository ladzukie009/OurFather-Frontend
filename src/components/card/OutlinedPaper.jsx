import { Paper, Typography } from "@mui/material";
import React from "react";

export default function ReusableOutlinedPaper({
  children,
  padding = 2,
  title,
  fontColor = "#666666",
}) {
  return (
    <>
      <Paper
        square
        variant="outlined"
        style={{ padding: `${padding}rem`, color: fontColor }}
      >
        {title && (
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Paper>
    </>
  );
}
