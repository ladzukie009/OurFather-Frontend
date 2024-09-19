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
  Paper,
  Divider,
  IconButton,
  Badge,
  Typography,
  Container,
  Link,
  Box,
  Toolbar,
  Stack,
  Button,
} from "@mui/material";
import PieChart from "../../components/chart/PieChart";
import UserSideNavigation from "../../components/sidebar/UserSideNavigation";

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

export default function UserDashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // const listOfLoans = [
  //   {
  //     id: 1,
  //     name: "Loan 1234123121231231233",
  //     amount: 1000,
  //   },
  //   {
  //     id: 2,
  //     name: "Loan 2",
  //     amount: 2000,
  //   },
  //   {
  //     id: 3,
  //     name: "Loan 3",
  //     amount: 1500,
  //   },
  //   {
  //     id: 4,
  //     name: "Loan 4",
  //     amount: 5000,
  //   },
  // ];

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
              Dashboard
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
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={2} lg={2}>
                {/* <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <div>
                      <Typography variant="h5" mb={0.5} color="text.secondary">
                        MY LOANS
                      </Typography>

                      {listOfLoans.map((loan) => (
                        <ListItem key={loan.id} component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}} primary={loan.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </div>
                  </Stack>

                </Paper> */}
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <div>
                      <Typography
                        variant="h5"
                        mb={0.5}
                        color="text.secondary"
                      ></Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        This is a sample description for total loan balance
                      </Typography>
                    </div>
                    <Button variant="outlined">Export</Button>
                  </Stack>

                  <Stack>
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 0.5,
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    ></Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <div>
                      <Typography variant="h5" mb={0.5} color="text.secondary">
                        TOTAL LOAN BALANCE
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        This is a sample description for total loan balance
                      </Typography>
                    </div>
                    <Button variant="outlined">Export</Button>
                  </Stack>

                  <Stack>
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 0.5,
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      Php 250,010.00
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <PieChart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                ></Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                ></Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
