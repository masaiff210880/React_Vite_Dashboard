import React from "react";
import ResponsiveDrawer from "../Dashboard/Dashboard";
import Customer from "../../Pages/Customer/Customer";
import Customercare from "../../Pages/Customercare/Customercare";
import Delivery from "../../Pages/Delivery/Delivery";
import Invoices from "../../Pages/Invoices/Invoices";
import Marketing from "../../Pages/Marketing/Marketing";
import ProductList from "../../Pages/Products/ProductList";
import Reports from "../../Pages/Reports/Reports";
import Salesorder from "../../Pages/Salesorder/Salesorder";
import Shipping from "../../Pages/Shipping/Shipping";
import Vendor from "../../Pages/Vendor/Vendor";
import Packages from "../../Pages/Packages/Packages";
import Multichanel from "../../Pages/Multichanel/Multichanel";
import ViewDetails from "../../Pages/View/ViewDetails";
import EditProduct from "../../Pages/Products/EditProduct";
import AddVariant from "../../Pages/Products/AddVariant";
import AddProduct from "../../Pages/Products/AddProduct";
import EditVariant from "../../Pages/Products/EditVariant";
import Home from "../../Pages/Dashboard/Home";
import TbChange from "../TabChange/TbChange";
import ViewProduct from "../../Pages/Products/ViewProduct";


export const Custo = () => {return <ResponsiveDrawer children={<Customer />} />;};
export const Custocare = () => {return <ResponsiveDrawer children={<Customercare />} />;};
export const Deli = () => {return <ResponsiveDrawer children={<Delivery />} />;};
export const Invo = () => {return <ResponsiveDrawer children={<Invoices />} />;};
export const Mark = () => {return <ResponsiveDrawer children={<Marketing />} />;};
export const Multi = () => {return <ResponsiveDrawer children={<Multichanel/>} />;};
export const Pack = () => {return <ResponsiveDrawer children={<Packages/>} />;};
export const Prod = () => {return <ResponsiveDrawer children={<ProductList/>} />;};
export const Repo = () => {return <ResponsiveDrawer children={<Reports/>} />;};
export const Sale = () => {return <ResponsiveDrawer children={<Salesorder />} />;};
export const Ship = () => {return <ResponsiveDrawer children={<Shipping />} />;};
export const Vendo = () => {return <ResponsiveDrawer children={<Vendor/>} />;};
export const View = () => {return <ResponsiveDrawer children={<ViewDetails/>} />;};
export const EditProd = () => {return <ResponsiveDrawer children={<EditProduct/>} />;};
export const AddVari = () => {return <ResponsiveDrawer children={<AddVariant/>} />;};
export const AddProd = () => {return <ResponsiveDrawer children={<AddProduct/>} />;};
export const EditVari = () => {return <ResponsiveDrawer children={<EditVariant/>} />;};
export const DashHome = () => {return <ResponsiveDrawer children={<Home/>} />;};
export const TabChanges = () => {return <ResponsiveDrawer children={<TbChange/>} />;};
export const ViewProd = () => {return <ResponsiveDrawer children={<ViewProduct/>} />;};











