import React from "react";
import style from "../../Styles/AllProductList.module.css";
import { Link } from "react-router-dom";
import exportIcon from "../../assets/Icons/exportIcon.svg";
import plusIcon from "../../assets/Icons/plusIcon.svg";
import setting_1 from "../../assets/Icons/setting_1.svg";
import topheader_dashboard from "../../assets/Icons/topheader_dashboard.svg";
import topheader_star from "../../assets/Icons/topheader_star.svg";
import heart from "../../assets/Icons/heart_icon.svg";
import { Tooltip } from "@mui/material";
const TopHeader = ({ headerName }) => {
  return (
    <>
      <div className={style.addProductHeader}>
        <div className={style.header}>
          <h1 className={style.headerName}>{headerName}</h1>
        </div>
        <div className={style.btnList}>
          <div className={style.exportBtn1}>
            <img
              className={style.exportIcon}
              src={exportIcon}
              alt="exportIcon"
              width={"100%"}
            />
            <h1 className={style.exportHeader1}>Export</h1>
          </div>
          <Link to={"/add-product"}>
            <button className={style.exportBtn2}>
              <img className={style.plusIcon} src={plusIcon} alt="plusIcon" />
              <div className={style.exportHeader2}>Add new</div>
            </button>
          </Link>
          <div className={style.setting}>
            <div className={style.setting1}>
              <img src={setting_1} alt="settingIcon" />
            </div>
          </div>
          <div className={style.dashboard}>
            <div className={style.dashboard1}>
              <img
                src={topheader_dashboard}
                alt="dashboardIcon"
                width={"100%"}
              />
            </div>
          </div>
          <div className={style.star}>
            <div className={style.star1}>
              <Tooltip title="Tooltip" arrow>
                <img src={heart} alt="starIcon" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
