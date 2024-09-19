import {
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DateRange from "../datePicker/DateRange";

export default function Filter({ title, caption }) {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <>
      <Paper square sx={{ padding: 2 }} variant="outlined">
        <Stack marginBottom={4} className="of-centered-item">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{caption}</Typography>
        </Stack>
        <Stack marginBottom={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="of-centered-item">
              <DateRange labelText="Start date" />
            </Grid>
            <Grid item xs={12} className="of-centered-item">
              <DateRange labelText="End date" />
            </Grid>
          </Grid>
        </Stack>
        <Stack className="of-centered-item" marginBottom={4}>
          <TextField
            sx={{ maxWidth: "20rem" }}
            fullWidth
            id="outlined-select-currency"
            size="small"
            select
            label="Status"
            defaultValue="EUR"
            helperText="Please select your status"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack className="of-centered-item" marginBottom={2}>
          <TextField
            id="outlined-basic"
            label="Search by reservation"
            variant="outlined"
            size="small"
            sx={{ maxWidth: "20rem" }}
            fullWidth
          />
        </Stack>
      </Paper>
    </>
  );
}
