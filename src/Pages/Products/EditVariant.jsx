import React, { useEffect, useState } from 'react'
import style from '../../Styles/EditVariant.module.css';
import dragIcon from '../../../src/assets/ad/drag 1.svg'
// import product from '../../../../assets/ProductList/variantImg.png'
import silverIcon from '../../../src/assets/ad/Star 5.svg'
import goldIcon from '../../../src/assets/ad/Star 6.svg'
import platinumIcon from '../../../src/assets/ad/Star 7.svg'
import gummiesimg from '../../../src/assets/ad/gummiesimage.svg'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
const EditVariant = () => {
    const [setData] = useState("")
    const {id} = useParams();
    const variant = useSelector((store)=>console.log('variant',store))
    
    console.log(variant)
    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.container}>
                    <div className={style.firstInput}>
                        <h1>Variant Name</h1>
                        <input type="text" />
                    </div>
                    {/*  */}
                    <div className={style.mainCard}>
                        <div className={style.labelImage}>
                            <div className={style.labels}>
                                <h1>Variant Image</h1>
                                
                                <h1>Variant Type</h1>
                            </div>
                            <div className={style.imageInputs}>
                                <div>
                                    {/* <div><img src={product} alt="product" width={'100%'} /></div> */}
                                    {/* Image */}
                                    <img src={gummiesimg} alt="" className={style.gummyimg}/>
                                    <div className={style.file_input}>
                                        <img src={dragIcon} alt="dragIcon" />
                                        <input type="file" id="file" className={style.file} name='featuredImage' />
                                        <label for="file">Change<p className={style.file_name}></p></label>
                                    </div>
                                    {/* Image */}
                                </div>
                                <input className={style.categoryInput} type="text" />
                            </div>
                        </div>
                        <div className={style.labelInputs}>
                            <div className={style.rightLabel}>
                                <h1>SKU</h1>
                                <h1>Flavour</h1>
                                <h1>Barcode</h1>
                            </div>
                            <div className={style.rightInputs}>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    {/* Pricing */}
                    <div className={style.line}>
            <hr />
          </div>
                    <div className={style.pricingSection}>
                     <p>Price Type</p>
                        <div className={style.mainPricing}>
                            <div className={style.priceType}>
                                <span htmlFor="">Cost Price</span>
                                <input type="number"  />
                                <span htmlFor="">Quantity</span>
                                <input type="number"  />
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
                                        <input type="number"  />
                                        <input type="number"  />
                                        <input type="number"  />
                                    </div>
                                </div>
                                {/* Profit */}
                                <div className={style.profitSection}>
                                    <div>
                                        <span>Profit %</span>
                                        <input type="number"  />
                                    </div>
                                    <div>
                                        <span>Profit %</span>
                                        <input type="number"  />
                                    </div>
                                    <div>
                                        <span>Profit %</span>
                                        <input type="number"  />
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                    </div>
                    {/* Pricing */}
                </div>
                <div >
                    <button className={style.update}> Update</button>
                </div>
            </div>
        </>
    )
}

export default EditVariant
