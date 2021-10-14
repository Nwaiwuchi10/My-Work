import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FaEnvelope, FaUser, FaAward } from "react-icons/fa";
import "./Dashboard.css";
import "./Menulist.css";
// import {
//   HelpRounded,
//   HomeOutlined,
//   Message,
//   Report,
//   Settings,
// } from "@material-ui/icons";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="main-div">
      <img src="./images/logo.png" alt="" className="img-col" />
      <div className="icon-d">
        <FaUser
          style={{ fontSize: "80px", marginLeft: "-50%", marginTop: "-10%" }}
        />
      </div>
      <Typography className="sh8" variant="h8">
        Mukhtar Saliu
      </Typography>
      <Typography className="sh9" variant="h8">
        ID:AI123PQ79
      </Typography>
      <Divider style={{ marginTop: "6%" }} />
      <Toolbar />

      <List className="list-h">
        {[
          "My Dashboard",
          "Report",
          "Premium",
          "Message",
          "Settings",
          "Support",
          "Log Out",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {[""].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

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
          <div>
            {/* <Typography variant="h6" noWrap component="div"> */}
            <nav className="nav">
              <FaEnvelope style={{ position: "absolute", right: "10%" }} />
            </nav>
            {/* </Typography> */}
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
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
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
      <Typography
        style={{
          backgroundColor: "lightgrey",
          height: "280vh",

          // paddingTop: "1px",
          // width: "985px",
          // marginLeft: "-12%",
          // marginTop: "-7%",
        }}
        paragraph
      >
        <div
          style={{
            backgroundColor: "lightgrey",
            height: "180vh",
            paddingTop: "1px",
            // width: "980px",
            marginLeft: "-12%",
            marginTop: "-7%",
          }}
        >
          <div style={{ marginTop: "18%" }} className="slider">
            <figure>
              <img alt="" src="./firstmobile.jpeg" className="advert" />
              <img alt="" src="./images/union.jpeg" className="advert" />
              <img alt="" src="img.png" className="advert" />
            </figure>
            <img className="advert" src="./images/union.jpeg" alt="" />
          </div>
          <Typography className="puyol" variant="h4">
            Dashboard
          </Typography>
          <div className="bod">
            <h1 className="hh">View Holdings</h1>
            <h2 className="hh2">Summary</h2>
            <div className="circle"></div>
          </div>

          <div className="job">
            <ul className="uli">
              <List>Shares</List>
              <br />
              <List className="jak">Total Shares</List>
              <br />
              <List>5242</List>
            </ul>
            <div className="sect">
              <select className="select">
                <option>ACCESS BANK PLC</option>
                <option>WAPIC INSURANCE PLC</option>
              </select>
            </div>
            <Typography className="va" variant="body1">
              Total Valuation
            </Typography>
            <Typography className="va2">N513,000</Typography>
            <div className="line"></div>
          </div>
          <div className="bod1"></div>
          <div className="bod2"></div>
          <div className="bod3"></div>
          <div className="bod4"></div>
          <div className="bd-c"></div>
          <div className="bd-d"></div>
        </div>
      </Typography>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
