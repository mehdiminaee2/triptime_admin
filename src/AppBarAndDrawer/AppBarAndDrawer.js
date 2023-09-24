import React from "react";
import { PropTypes } from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { Link as RouterLink, useLocation } from "react-router-dom";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import PalettePicker from "../Theme/PalettePicker";
export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    width: "150px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: `#${theme.palette.primary[300].substring(1)}77`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

function ResponsiveDrawer(props) {
  const { container, setCurrentTheme, currentTheme } = props;
  const classes = useStyles();

  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = false; // pathname === "/";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* Modifying the source code from the template example to use the react router pathname hook to set
  selected prop and to use the react router component prop */
  const { toolbar, root, appBar, logo, menuButton, drawerPaper, } = classes;
  const drawer = (
    <div>
      <div className={toolbar} />
      <Divider />
      <List>
        {[
          { path: "home", text: "صفحه شروع", icon: "home" },
          { path: "login", text: "ورود", icon: "lock" },
          { path: "profile", text: "پروفایل", icon: "person" },
          { path: "dashboard", text: "داشبورد", icon: "dashboard" },
          { path: "people", text: "کاربران", icon: "people" },
          { path: "map", text: "نقشه", icon: "map" },
          { path: "components", text: "اجزاء", icon: "apps" },
          { path: "settings", text: "تنظیمات", icon: "settings" },
        ].map(({ path, text, icon }, index) => (
          <ListItem
            component={RouterLink}
            selected={pathname === `/${path}`}
            to={`/${path}`}
            button
            key={index}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={text.toUpperCase()} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={root}>
      <CssBaseline />
      <div
        style={{
          height: "64px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "contrast(75%)",
          backgroundImage: "url(/img/wallpaper.jpeg)",
          position: "absolute",
          top: "0px",
          width: "100%",
          zIndex: -2,
        }}
      />
      <AppBar position="sticky" className={isHome ? "" : appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={menuButton}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            to={"/"}
            component={RouterLink}
            className={logo}
          >
            مترو شیراز
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <PalettePicker
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          />
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            size="large">
            <Avatar src="/img/driver.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isHome && !mobileOpen ? (
        <div />
      ) : (
        <nav aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: drawerPaper,
              }}
              variant="permanent"
              open={isHome}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      )}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default ResponsiveDrawer;
