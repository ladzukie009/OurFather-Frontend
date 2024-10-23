import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function CircularProgressWithPercentage({ value, size }) {
  return (
    <>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={value} size={size} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
