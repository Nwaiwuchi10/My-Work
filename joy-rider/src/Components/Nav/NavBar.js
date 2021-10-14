import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { List } from "@mui/material";
import { FaBars, FaCaretDown, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(6),
    marginLeft: "3%",
    backgroundColor: "  rgb(11, 12, 39)",
    minWidth: 180,

    color: theme.palette.mode === "light" ? "white" : theme.palette.grey[300],

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },

    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        backgroundColor: "brown",
        color: "brown",
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [click, setClick] = useState(false);
  const Click = () => setClick(!click);
  return (
    <div className="main-nav">
      <nav className="navbar">
        <div className="img-src">
          <img className="img-col" src="./images/pix.png" alt="" />
        </div>
        <img className="img-col1" src="./images/4.png" alt="" />
        <div className="trans">translogic</div>
        <div className="line-div"></div>
        <div className="Icons-search">
          <FaSearch />{" "}
        </div>
        <Link to="/" className="navbar-logo"></Link>
        <div className="menu-icon" onClick={Click}>
          <FaBars className="bar-icon" onClick={Click} />
          <h6>MENU</h6>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Home{" "}
            <FaCaretDown
              style={{ position: "fixed", top: "5.58%", left: "49%" }}
              className="arrow-down"
            />
          </List>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Home2 </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> HomeBox </Link>
            </MenuItem>
          </StyledMenu>
          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Features{" "}
            <FaCaretDown
              style={{ position: "fixed", top: "5.58%", left: "57.2%" }}
              className="arrow-down"
            />
          </List>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Typography </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Shortcodes </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Services plus </Link>
            </MenuItem>
          </StyledMenu>
          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            About Us{" "}
            <FaCaretDown
              style={{ position: "fixed", top: "5.58%", left: "65.8%" }}
              className="arrow-down"
            />
          </List>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link style={{ color: "white" }} to="./">
                {" "}
                Style1{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Style2 </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <Link to="./"> Pricing </Link>
            </MenuItem>
          </StyledMenu>
          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
          >
            Services
          </List>

          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
          >
            News{" "}
            <FaCaretDown
              style={{ position: "fixed", top: "5.58%", left: "80.2%" }}
              className="arrow-down"
            />
          </List>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link className="Link-menu" style={{ color: "white" }} to="./">
                {" "}
                Classic{" "}
              </Link>
            </MenuItem>
            <MenuItem className="Link-menu" onClick={handleClose} disableRipple>
              <Link style={{ color: "white" }} to="./">
                {" "}
                Classic2Coloumns{" "}
              </Link>
            </MenuItem>
            <MenuItem className="Link-menu" onClick={handleClose} disableRipple>
              <Link style={{ color: "white" }} to="./">
                {" "}
                Portfolio style{" "}
              </Link>
            </MenuItem>
            <MenuItem className="Link-menu" onClick={handleClose} disableRipple>
              <Link style={{ color: "white" }} to="./">
                {" "}
                Chess style{" "}
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <Link style={{ color: "white" }} to="./">
                {" "}
                Classic3Coloumns
              </Link>
            </MenuItem>
          </StyledMenu>
          <List
            style={{ padding: "10px 20px" }}
            className="nav-item"
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
          >
            contacts
          </List>

          <FaTimes className="times-icon" onClick={Click} />

          <img className="img-col3" src="./images/pix.png" alt="" />
        </ul>
      </nav>
    </div>
  );
}
