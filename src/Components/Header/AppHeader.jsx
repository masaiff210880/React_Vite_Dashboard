import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import magnifier from "../../assets/Icons/magnifier.svg";
import notification from "../../assets/Icons/notification.svg";
import setting from "../../assets/Icons/setting.svg";
import avatar from "../../assets/Icons/avatar.svg";
import add_icon from "../../assets/Icons/add_con.svg";
import React from "react";
import "../../Styles/Dashboard.css";

const drawerWidth = 245;
const AppHeader = ({ handleDrawerToggle, header }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="top-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            style={{ color: "black" }}
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="app-bar">
            <div>
              <h1>{header}</h1>
            </div>
            <div className="profile-section">
              <button className="add-button">
                <img src={add_icon} alt="add_icon" />
              </button>
              <div className="search-bar">
                <div>
                  <img src={magnifier} alt="magnifier" />
                </div>
                <input type="text" placeholder="Search here..." />
              </div>
              <div className="all-icons">
                <div>
                  <img src={notification} alt="notification" width={"100%"} />
                </div>
                <div>
                  <img src={setting} alt="setting" width={"100%"} />
                </div>
                <div>
                  <img src={avatar} alt="avatar" width={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
