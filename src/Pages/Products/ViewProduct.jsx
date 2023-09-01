import React, { useEffect, useState } from "react";
import style from "../../Styles/ViewProduct.module.css";
import dummy_img from "../../../src/assets/ad/gummiesimage.svg";
import add_btn from "../../../src/assets/ad/add_btn.svg";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import FormControl from "@mui/material/FormControl";
import TabChange from "../../Components/TabChange/TbChange";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Morebutton from "../../Components/Buttons/Morebutton";
import IconButton from "../../Components/Buttons/IconButton";
import Crossimage from "../../Components/Buttons/Crossimage";
import settings from '../../assets/ad/settings.svg'
import edit from '../../assets/ad/edit box.svg'
import PDF1 from '../../assets/ad/PDF img.svg'
import print from '../../assets/ad/print1.svg'
import email from '../../assets/ad/emailicon.svg'
import link from '../../assets/ad/link.svg'
import cross from '../../assets/ad/cross.svg'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#FCFCFC" : "#1A2027",
    border: "0.5px solid rgba(77, 175, 230, 0.50)",
    borderColor:
      theme.palette.mode === "light" ? "rgba(77, 175, 230, 0.50)" : "#2D3843",
    fontSize: 16,
    width: "383px",
    height: "28px",
    padding: "10px 12px",
    fontFamily: '"Segoe UI"',
    color: "#28253B",
    // fontFamily: 'Inter',
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SizeInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    // borderTopLeftRadius:5,
    // borderBottomLeftRadius:5,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#FCFCFC" : "#1A2027",
    border: "0.5px solid rgba(77, 175, 230, 0.50)",
    borderColor:
      theme.palette.mode === "light" ? "rgba(77, 175, 230, 0.50)" : "#2D3843",
    fontSize: 16,
    width: "180px",
    height: "28px",
    padding: "10px 12px",
    fontFamily: '"Segoe UI"',
    color: "#28253B",
    // fontFamily: 'Inter',
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const handleChange = () => {};
onchange = "getImage(this.value)";

function getImage(imagename) {
  var newimg = imagename.replace(/^.*\\/, "");
  $CombinedState("#display-image").html(newimg);
}
const ViewProduct = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  // console.log("safsdfsadfasdfasdf", id);
  const [imageName, setImageName] = useState("");
  const [displayedImage, setDisplayedImage] = useState("");

  const getImage = (imagename) => {
    const newimg = imagename.replace(/^.*[\\/]/, "");
    setDisplayedImage(newimg);
  };
  const product = useSelector((store) => store.productReducer.products);
  //
  useEffect(() => {
    const soloProduct = product.find((el) => el._id === id);
    setData(soloProduct);
  }, []);
  // console.log("sdafffffffffffffffffffffffffff", data);
  return (
    <div>
      <div className={style.container}>
        <div className={style.topHeader}>
          <IconButton icon={settings} />
          <IconButton icon={edit} />
          <IconButton icon={PDF1} />
          <IconButton icon={print} />
          <IconButton icon={email} />
          <IconButton icon={link} />
          <Morebutton />
          {/* <Crossimage icon={cross} /> */}
        </div>
        <div className={style.image_dev}>
          <div className={style.image_box}>
           {
            data?.featuredImage?.src && (
              <img src={data?.featuredImage?.src} alt="" width={"100%"} />
            )
           }
          </div>
          <div className={style.images}>
            <div className={style.small_imgbox}>
            {
            data?.featuredImage?.src && (
              <img src={data?.featuredImage?.src} alt="" width={"100%"} />
            )
           }
            </div>
            <div className={style.img_2}>
              <label>
                <img
                  src={add_btn}
                  alt=""
                  width={"100%"}
                  style={{ cursor: "pointer" }}
                />

                <input
                  type="file"
                  name=""
                  id="firstname"
                  onChange={(e) => {
                    const selectedImage = e.target.files[0];
                    if (selectedImage) {
                      setImageName(selectedImage.name);
                      getImage(selectedImage.name);
                    }
                  }}
                  style={{ display: "none", visibility: "none" }}
                />
              </label>
            </div>
            <div
              id="display-image"
              style={{ marginTop: "100px", marginLeft: "-200px" }}
            >
              {displayedImage}
            </div>

            {/* <input type="file"/> */}
          </div>
        </div>
        <div className={style.D8_box}>
          <div className={style.D8_title}>
            <h1>{data.name}</h1>
            <div className={style.SKU_titles}>
              <h1>SKU</h1>
              <h1>Category </h1>
              <h1>Barcode</h1>
            </div>
            <div className={style.mui_inputbox}>
              <FormControl variant="standard" className={style.mui_inputs}>
                <BootstrapInput
                  id="bootstrap-input"
                  className={style}
                  value={data.sku}
                />
                <BootstrapInput id="bootstrap-input" className={style} />
                <BootstrapInput id="bootstrap-input" className={style} />
              </FormControl>
            </div>
          </div>
          <div className={style.desc}>
            <textarea
              id="w3review"
              name="Description"
              placeholder="Description"
              rows="11"
              cols="25"
            ></textarea>
          </div>
        </div>
        <div className={style.size_box}>
          <div className={style.size_titles}>
            <h1>Size/Weight</h1>
            <h1>Units</h1>
          </div>

          <div className={style.both_inputs}>
            <div className={style.size_inputs}>
              <SizeInput id="size-input" className={style} />
              <SizeInput id="size-input" className={style} />
            </div>
            <div className={style.size_inputs}>
              <SizeInput id="size-input" className={style} />
              <SizeInput id="size-input" className={style} />
            </div>
          </div>
        </div>
        <div style={{ position: "relative", bottom: "750px" }}>
          <TabChange />
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
