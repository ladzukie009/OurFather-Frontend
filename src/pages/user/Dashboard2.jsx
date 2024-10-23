import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import UserSideNavigation from "../../components/sidebar/UserSideNavigation";
import {
  CssBaseline,
  Grid,
  Divider,
  IconButton,
  Typography,
  Container,
  Link,
  Box,
  Toolbar,
} from "@mui/material";
import ReusableOutlinedPaper from "../../components/card/OutlinedPaper";
import DonutChart from "../../components/chart/DonutChart";
import ListIconWithPercent from "../../components/list/ListIconWithPercent";
import DescriptionIcon from "@mui/icons-material/Description";
import ReusableList from "../../components/list/ReusableList";
import SwipableCardCarousel from "../../components/carousel/ResponsiveCarousel";
import ResponsiveCollapsibleTable from "../../components/table/CollapsibleTable";
import ReusableStaticDatePicker from "../../components/datePicker/StaticDatePicker";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Our Father
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const drawerWidth = 240;

const data = [
  {
    id: 1,
    label: "Lorem ipsum dolor sit amet",
    text: "Dec 23, 2026",
    percentage: 40,
  },
  {
    id: 2,
    label: "Lorem ipsum dolor sit amet",
    text: "Nov 04, 2025",
    percentage: 70,
  },
  {
    id: 3,
    label: "Lorem ipsum dolor sit amet",
    text: "Dec 11, 2024",
    percentage: 90,
  },
];

// Define columns
// const columns1 = [
//   { label: "Due date", field: "due_date" },
//   { label: "Name", field: "name", align: "right" },
//   { label: "Type", field: "type", align: "right" },
//   { label: "Amount", field: "carbs", align: "right" },
//   { label: "Balance", field: "protein", align: "right" },
// ];

const columns = [
  { id: "firstName", label: "Firstname" },
  { id: "lastName", label: "Lastname" },
  { id: "email", label: "Email" },
  { id: "mobileNo", label: "Mobile no" },
  { id: "gender", label: "Gender" },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <UserSideNavigation />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <UserSideNavigation />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "grid",
              }}
            >
              <ReusableOutlinedPaper title="Total Loan Balance" padding={1}>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                    backgroundColor: "orange",
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "2rem",
                        md: "2.2rem",
                      },
                    }}
                  >
                    ₱ 250,000.00
                  </Typography>
                </Box>
              </ReusableOutlinedPaper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: "grid",
              }}
            >
              <ReusableOutlinedPaper title="Active Loans" padding={1}>
                <Divider />
                <ListIconWithPercent icon={<DescriptionIcon />} data={data} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link href="#" underline="none">
                    {"See more.."}
                  </Link>
                </Box>
              </ReusableOutlinedPaper>
            </Grid>
            <Grid
              item
              md={12}
              lg={4}
              sx={{
                display: {
                  xs: "none",
                  md: "grid",
                },
              }}
            >
              <ReusableOutlinedPaper title="News and Updates" padding={1}>
                <Divider />
                <ReusableList items={data} />
              </ReusableOutlinedPaper>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: "grid" }}>
              <ReusableOutlinedPaper title="Select date" padding={1}>
                <Divider />
                <ReusableStaticDatePicker />
              </ReusableOutlinedPaper>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: "grid" }}>
              <ReusableOutlinedPaper title="Reservation" padding={1}>
                <DonutChart />
              </ReusableOutlinedPaper>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <ReusableOutlinedPaper
                title="Available Loan Products"
                padding={1}
              >
                <Divider />
                <Box sx={{ p: 4 }}>
                  <SwipableCardCarousel />
                </Box>
              </ReusableOutlinedPaper>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: {
                  xs: "grid",
                  md: "none",
                },
              }}
            >
              <ReusableOutlinedPaper title="News and Updates" padding={1}>
                <Divider />
                <ReusableList items={data} />
              </ReusableOutlinedPaper>
            </Grid>

            <Grid item xs={12}>
              <ReusableOutlinedPaper title="Outstanding Loans" padding={1}>
                <Divider />
                <ResponsiveCollapsibleTable
                  // data={data1}
                  columns={columns}
                  fetchData={fetchData}
                />
              </ReusableOutlinedPaper>
            </Grid>

            {/* 
            <Grid item xs={12}>
              <ReusableOutlinedPaper title="Outstanding Loans" padding={1}>
                <Divider />
                <ReusableTable
                  columns={columns}
                  fetchData={fetchData}
                  title="List of reservation"
                />
              </ReusableOutlinedPaper>
            </Grid>

            <Grid item xs={12}>
              <ReusableOutlinedPaper title="Payment History" padding={1}>
                <Divider />
                <ReusableTable
                  columns={columns}
                  fetchData={fetchData}
                  title="List of reservation"
                />
              </ReusableOutlinedPaper>
            </Grid> */}
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
