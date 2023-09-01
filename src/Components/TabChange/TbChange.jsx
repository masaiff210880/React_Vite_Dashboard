
import React, { useState } from 'react';
import style from '../../Styles/TbChange.module.css'; // Make sure to import your CSS file

import image1 from "../../assets/tabIcon/Img-1.svg";
import image2 from "../../assets/tabIcon/Img-2.svg";
import image3 from "../../assets/tabIcon/Img-3.svg";
import image4 from "../../assets/tabIcon/Img-4.svg";
import image5 from "../../assets/tabIcon/Img-5.svg";
import Overview from './Overview';

const TabChange = () => {
  const [selectedTab, setSelectedTab] = useState('Overview'); // Initialize with 'Overview' tab

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderTabButton = (tabName, label, imageSrc) => (
    <div
      key={tabName}
      className={`${style.btnStyle} ${selectedTab === tabName ? style.active : ''}`}
      style={{
        backgroundColor: selectedTab === tabName ? 'white' : '',
        border: selectedTab === tabName ? '0.01px solid white' : 'none',
        color: selectedTab === tabName ? '#2F4C8F' : 'white',
        fontWeight : selectedTab === tabName ? 'bold' : 'none'
      }}
      onClick={() => handleTabClick(tabName)}
    >
      <img
        src={imageSrc}
        alt="img"
        style={{
          filter: selectedTab === tabName ? 'black' : 'black',
        }}
      />
      {label}
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Overview':
        return <div><Overview /></div>;
      case 'ProductVendors':
        return <div>Product Vendors Content</div>;
      case 'OrderHistory':
        return <div>Order History Content</div>;
      case 'MovementHistory':
        return <div>Movement History Content</div>;
      case 'Variant':
        return <div>Variant Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={style.NavDiv}>
        {renderTabButton('Overview', 'Overview', image1)}
        {renderTabButton('ProductVendors', 'Product Vendors', image2)}
        {renderTabButton('OrderHistory', 'Order History', image3)}
        {renderTabButton('MovementHistory', 'Movement History', image4)}
        {renderTabButton('Variant', 'Variant', image5)}
      </div>
      <div className={style.TabContent}>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default TabChange;

