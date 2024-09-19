import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";

const sales = [
  {
    label: "Total Sales",
    value: "$1k",
    growth: "+8%",
    bgColor: "#FFE2E5",
    iconBackgroundColor: "#FA5A7D",
  },
  {
    label: "Total Order",
    value: "300",
    growth: "+5%",
    bgColor: "#FFF4DE",
    iconBackgroundColor: "#FF947A",
  },
  {
    label: "Sold",
    value: "5",
    growth: "+1.2%",
    bgColor: "#DCFCE7",
    iconBackgroundColor: "#3CD856",
  },
  {
    label: "Customers",
    value: "8",
    growth: "+0.5%",
    bgColor: "#F3E8FF",
    iconBackgroundColor: "#BF83FF",
  },
];

export default function Sales() {
  return (
    <>
      <Paper
        sx={{
          pt: 2.875,
          pb: 4,
          px: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <div>
            <Typography variant="h4" mb={0.5}>
              Today's Sales
            </Typography>
            <Typography variant="subtitle1" color="primary.lighter">
              Sales Summary
            </Typography>
          </div>
          <Button
            variant="outlined"
            // startIcon={<IconifyIcon icon="solar:upload-linear" />}
          >
            Export
          </Button>
        </Stack>

        <Grid
          container
          spacing={{ xs: 3.875, xl: 2 }}
          columns={{ xs: 1, sm: 2, md: 4 }}
        >
          {sales.map((item) => (
            <Grid item xs={1} key={item.label}>
              <Card
                sx={{
                  height: "100%",
                  padding: 1,
                  borderRadius: 4,
                  bgcolor: item.bgColor,
                }}
              >
                <CardContent
                  sx={(theme) => ({
                    p: { xs: `${theme.spacing(2.5)} !important` },
                  })}
                >
                  <Stack
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                      bgcolor: item.iconBackgroundColor,
                    }}
                  >
                    <AssessmentIcon style={{ color: "#fff" }} />
                  </Stack>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                    color="#151D48"
                    mb={1}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    mb={1}
                    color={"#425166"}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="p"
                  >
                    Last day {item.growth}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}
