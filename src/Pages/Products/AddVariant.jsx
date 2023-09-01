import React, { useState } from "react";
import style from "../../Styles/AddVariant.module.css";
// import selectIcon from '../../../../assets/ad/select.svg'
import dragIcon from "../../../src/assets/ad/drag 1.svg";
import silverIcon from "../../../src/assets/ad/Star 5.svg";
import goldIcon from "../../../src/assets/ad/Star 6.svg";
import platinumIcon from "../../../src/assets/ad/Star 7.svg";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addVariant } from "../../Redux/productReducer/action";

// let priceLevel = ["levelone", "leveltwo", "levelthree"];

// let price = priceLevel.reduce((acc, level) => {
//   return (acc[level] = 0);
// }, {});

// console.log("ppppp", price);

// const initialVariant = {
 
// };

const AddVariant = () => {
  const [price,setPrice] = useState({})
  const [variants, setVariantData] = useState({
    name: "",
    variantType: "",
    flavour: "",
    sku: "",
    barcode: "",
    costPrice: "",
    stock_quantity: "",
    price,
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  // Getting Input Values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariantData({ ...variants, [name]: value });
  };

  const handleChangePrice=(e)=>{
    const {name,value} = e.target;
    setPrice({...price, [name]:value})
  }
  // console.log(price)
  // Add Variant Request
  const handleAddVariant = () => {
    variants['price'] = price,
    dispatch(addVariant(id, [variants])).then(() => {
      alert("Variant Added Successfully");
      // setVariantData(initialVariant);
    });
    // console.log(variants)
  };
  // console.log(variantData)
  return (
    <>
      <div className={style.variantContainer}>
        <div className={style.container}>
          <div className={style.main}>
            <div className={style.addVariant}>
              <div className={style.label}>
                <h1>Variant Name</h1>
                <h1>SKU</h1>
                <h1>Variant Type</h1>
                <h1>Flavour</h1>
                <h1>Barcode</h1>
              </div>
              <div className={style.variantInputs}>
                <input
                  type="text"
                  value={variants.name}
                  name="name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={variants.sku}
                  name="sku"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={variants.variantType}
                  name="variantType"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={variants.flavour}
                  name="flavour"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={variants.barcode}
                  name="barcode"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={style.imageUploader}>
              <div className={style.image}>
                <img src={dragIcon} alt="dragIcon" width={"100%"} />
              </div>
              {/* Image Uploader */}
              <div className={style.filUpload}>
                <h1 className={style.header}>Drag image(s) here</h1>
                <span className={style.fileOr}>or</span>
                <div className={style.file_input}>
                  <input
                    type="file"
                    id="file"
                    className={style.file}
                    name="featuredImage"
                  />
                  <label for="file">
                    Browse images<p className={style.file_name}></p>
                  </label>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* Line */}
          <div className={style.line}>
            <hr />
          </div>
          {/*  */}
          {/* Second Section */}
          <div className={style.pricingSection}>
            <h1>Price Type</h1>
            <div className={style.mainPricing}>
              <div className={style.priceType}>
                <span htmlFor="">Cost Price</span>
                <input
                  type="number"
                  value={variants.costPrice}
                  name="costPrice"
                  onChange={handleChange}
                />
                <span htmlFor="">Quantity</span>
                <input
                  type="number"
                  value={variants.stock_quantity}
                  name="stock_quantity"
                  onChange={handleChange}
                />
              </div>
              <div className={style.mainRightsection}>
                <div className={style.rightsection}>
                  <div>
                    <div>
                      <img src={silverIcon} alt="silverIcon" />
                      <h1>Silver</h1>
                    </div>
                    <span>Selling Price</span>
                  </div>
                  <div>
                    <div>
                      <img src={goldIcon} alt="goldIcon" />
                      <h1>Gold</h1>
                    </div>
                    <span>Selling Price</span>
                  </div>
                  <div>
                    <div>
                      <img src={platinumIcon} alt="platinumIcon" />
                      <h1>Platinum</h1>
                    </div>
                    <span>Selling Price</span>
                  </div>
                </div>
                {/*  */}
                <div className={style.sellingPrice}>
                  <div>
                    <input
                      type="number"
                      value={price.levelone}
                      name="levelone"
                      onChange={handleChangePrice}
                    />
                    <input
                      type="number"
                      value={price.leveltwo}
                      name="leveltwo"
                      onChange={handleChangePrice}
                    />
                    <input
                      type="number"
                      value={price.levelthree}
                      name="levelthree"
                      onChange={handleChangePrice}
                    />
                  </div>
                </div>
                {/* Profit */}
                <div className={style.profitSection}>
                  <div>
                    <span>Profit %</span>
                    <input
                      type="number"
                      // value={variants.silverSellingPercent}
                      name="silverSellingPercent"
                      // onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span>Profit %</span>
                    <input
                      type="number"
                      // value={variants.goldSellingPercent}
                      name="goldSellingPercent"
                      // onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span>Profit %</span>
                    <input
                      type="number"
                      // value={variants.platinumSellingPercent}
                      name="platinumSellingPercent"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className={style.btn}>
        <Link to={`/product/edit-variant/${id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleAddVariant}>Submit</button>
      </div>
    </>
  );
};

export default AddVariant;
