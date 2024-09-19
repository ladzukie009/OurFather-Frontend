import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateRange({ labelText }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ maxWidth: "20rem" }}
          label={labelText}
          slotProps={{
            textField: { variant: "outlined", size: "small", fullWidth: true },
          }}
        />
      </LocalizationProvider>
    </>
  );
}
