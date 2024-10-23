import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function ReusableStaticDatePicker() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["StaticDatePicker"]}>
          <DemoItem>
            <StaticDatePicker defaultValue={dayjs()} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
