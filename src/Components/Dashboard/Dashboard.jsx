import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import "../../Styles/Dashboard.css";
import logo from "../../assets/Icons/logo.svg";
import dashboard from "../../assets/Icons/dashboard_sidebar.svg";
import products from "../../assets/Icons/products.svg";
import customers from "../../assets/Icons/customers.svg";
import multichanel from "../../assets/Icons/multichanel.svg";
import shipping from "../../assets/Icons/shipping.svg";
import marketing from "../../assets/Icons/marketing.svg";
import reports from "../../assets/Icons/reports.svg";
import vendor from "../../assets/Icons/vendor.svg";
import salesorder from "../../assets/Icons/salesorder.svg";
import packages from "../../assets/Icons/packages.svg";
import delivery from "../../assets/Icons/delivery.svg";
import customercare from "../../assets/Icons/customercare.svg";
import invoices from "../../assets/Icons/invoices.svg";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Cookies from "js-cookie";
import styled from "@emotion/styled";
import AppHeader from "../Header/AppHeader";

const drawerWidth = 245;

function ResponsiveDrawer(props) {
  // const userInfo = JSON.parse(Cookies.get("userInfo"));
  // console.log(userInfo);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // console.log(props);
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar-container">
      <Link to={"/dashboard"}>
        <Box
          sx={{
            width: 245,
            height: 100,
            background:
              "linear-gradient(360deg, #E5FFFF 9.00%, #E5FFFF 10.00%, #F8FFFF 62.00%, #FFF 98.00%);",
            position: "relative",
            top: "1px",
            left: "-2px",
          }}
        >
          <img className="ad_logo" src={logo} alt="logo" />
        </Box>
      </Link>
      <Divider />
      <List className="sidebar">
        <ListItem disablePadding className="sidebar-list">
          <ListItemButton onClick={() => navigate("/ad-dashboard")}>
            <ListItemIcon>
              <div className="side-icon">
                <img src={dashboard} alt="dashboard" />
              </div>
            </ListItemIcon>
            <ListItemText className="sidebar-title">Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          {/* List Navigation Start */}
          <List
            sx={{ width: "100%", maxWidth: "500px", bgcolor: "2581BF" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={products} alt="dashboard" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title" >Products</ListItemText>
              {open ? (
                <ExpandLess className="expandLess" />
              ) : (
                <ExpandMore className="expandMore" />
              )}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding >
                <Link to={"/products-items"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <div className="side-icon">
                        <ul>
                          <div className="subListIcon"></div>
                        </ul>
                      </div>
                    </ListItemIcon>
                    <ListItemText className="sidebar-title" >
                      Items
                    </ListItemText>
                   
                  </ListItemButton>
                  <hr className="horizonal-line" />
                </Link>
              </List>
            </Collapse>
            {/* Item Group */}
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding>
                <Link to={"/products"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <div className="side-icon">
                        <ul>
                          <div className="subListIcon"></div>
                        </ul>
                      </div>
                    </ListItemIcon>
                    <ListItemText className="sidebar-title">
                      Item Group
                    </ListItemText>
                  </ListItemButton>
                  <hr className="horizonal-line" />
                </Link>
              </List>
            </Collapse>
            {/* Product Inventory */}
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding>
                <Link to={"/products"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <div className="side-icon">
                        <ul>
                          <div className="subListIcon"></div>
                        </ul>
                      </div>
                    </ListItemIcon>
                    <ListItemText className="sidebar-title">
                      Product Inventory
                    </ListItemText>
                  </ListItemButton>
                  <hr className="horizonal-line" />
                </Link>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" >
              <List component="div" disablePadding>
                <Link to={'/tab-change'}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <div className="side-icon">
                        <ul><li className="subListIcon"></li></ul>
                      </div>
                    </ListItemIcon>
                    <ListItemText className="sidebar-title">TabChange</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </List>
          {/* List Navigation End */}
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/customers"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={customers} alt="customers" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Customers</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/shipping"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={shipping} alt="shipping" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Shipping</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/multichanel"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={multichanel} alt="multichanel" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">
                Multi Chanel
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/marketing"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={marketing} alt="marketing" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Marketing</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/reports"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={reports} alt="reports" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Reports</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/vendor"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={vendor} alt="vendor" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Vendor</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/sales-order"}>
            <ListItemButton onClick={() => navigate("/sales-order")}>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={salesorder} alt="salesorder" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Sales Order</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/packages"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={packages} alt="packages" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Packages</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/delivery"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={delivery} alt="delivery" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Delivery</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/customer-care"}>
            <ListItemButton>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={customercare} alt="customercare" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">
                Customer Care
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding className="sidebar-list">
          <Link to={"/invoices"}>
            <ListItemButton onClick={() => navigate("/invoices")}>
              <ListItemIcon>
                <div className="side-icon">
                  <img src={invoices} alt="invoices" />
                </div>
              </ListItemIcon>
              <ListItemText className="sidebar-title">Invoices</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppHeader handleDrawerToggle={handleDrawerToggle} header="Dashboard"/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          style={{ overflow: "hidden" }}
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
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

// import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

// export default function ResponsiveDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List
//       sx={{ width: '300px', maxWidth: "500px", bgcolor: 'background.paper' }}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       // subheader={
//       //   <ListSubheader component="div" id="nested-list-subheader">
//       //     Nested List Items
//       //   </ListSubheader>
//       // }
//     >
//       <ListItemButton>
//         <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon>
//         <ListItemText primary="Sent mail" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <DraftsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" >
//         <List component="div" disablePadding>
//           <Link to={'/products'}>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//           </Link>
//         </List>
//       </Collapse>
//     </List>
//   );
// }
