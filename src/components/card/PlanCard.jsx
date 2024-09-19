import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

export default function PlanCard() {
  return (
    <>
      <Card variant="outlined" square>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Plan details
          </Typography>
          <Typography variant="h5" component="div">
            Deathcare Plan A
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Php 10,000.00
          </Typography>
          <Chip
            label="Active"
            color="success"
            sx={{ mb: 1.5, width: "6rem" }}
          />
          <Typography variant="body2">
            This plan has a lifetime Memorial Service Package.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View details</Button>
        </CardActions>
      </Card>
    </>
  );
}
