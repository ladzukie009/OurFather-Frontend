import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  CssBaseline,
  Grid,
  Divider,
  IconButton,
  Badge,
  Typography,
  Container,
  Link,
  Box,
  Toolbar,
  Paper,
  Tabs,
  useTheme,
  Tab,
} from "@mui/material";
import UserSideNavigation from "../../components/sidebar/UserSideNavigation.jsx";
import PlanCard from "../../components/card/PlanCard.jsx";
import PropTypes from "prop-types";
import TitleTextCard from "../../components/card/TitleTextCard.jsx";

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MyPlans() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Plan / Loans
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <UserSideNavigation />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4 }} margin={{ sm: 4 }}>
            <Grid container>
              <Grid item xs={12} sm={8} md={2}>
                <PlanCard />
                <PlanCard />
                <PlanCard />
              </Grid>
              <Grid item xs={10}>
                <Paper square variant="outlined">
                  <Grid container padding={4}>
                    <Grid className="of-centered-item" item xs={12}>
                      <Typography variant="h4" gutterBottom>
                        Deathcare Plan A
                      </Typography>
                    </Grid>
                    <Grid className="of-centered-item" item xs={6}>
                      <Typography variant="body" gutterBottom>
                        Loan Account No.
                      </Typography>
                    </Grid>
                    <Grid className="of-centered-item" item xs={6}>
                      <Typography variant="body" gutterBottom>
                        Balance:
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid className="of-centered-item">
                    <Box sx={{ bgcolor: "background.paper", width: "90%" }}>
                      <AppBar position="static">
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="secondary"
                          textColor="inherit"
                          variant="fullWidth"
                          // aria-label="full width tabs example"
                        >
                          <Tab label="Account Summary" {...a11yProps(0)} />
                          <Tab label="Statement of Account" {...a11yProps(1)} />
                          <Tab label="Payment History" {...a11yProps(2)} />
                        </Tabs>
                      </AppBar>
                      <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Loan Value"}
                              description={"PHP 530,000.00"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Interest Rate"}
                              description={"6.25"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Take Out Date"}
                              description={"07/12/2024"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Outstanding Balance"}
                              description={"PHP 528,991.62"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Term in Years"}
                              description={"30"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TitleTextCard
                              title={"Monthly Amortization"}
                              description={"PHP 3,476.45"}
                            />
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                      </TabPanel>
                      <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                      </TabPanel>
                    </Box>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
