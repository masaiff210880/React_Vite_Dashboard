import React, { useEffect, useState } from 'react'
import style from '../../Styles/EditProduct.module.css';
import multiple from "../../assets/viewdetails/multiple.svg";
import edit from "../../assets/viewdetails/edit.svg";
import dis from "../../assets/viewdetails/dis.svg"
import add from "../../assets/viewdetails/add.svg"
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../Redux/productReducer/action';

// import { useNavigate } from 'react-router-dom';
const EditProduct = () => {
    // const navigate = useNavigate();
    const singleData = useSelector((store)=>store.productReducer.products)
    const [data,setData] = useState([])
    console.log("data",data)
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        const data = singleData.find((el)=>el._id===id);
        setData(data)
    },[])
    const handleChange=(e)=>{
      const {name,value} = e.target;
      setData({...data,[name]:value})
    }
    console.log('product ID',id)
    // Edit Request
    const handleEditProduct=()=>{
      dispatch(editProduct(id,data))
      alert('Product Edited Successfully go to Product List')
    }
    console.log(data)
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.viewProduct}>
                    <div>
                        <div className={style.viewImage}>
                            {
                                data?.featuredImage?.src && (
                                    <img src={data?.featuredImage?.src} alt={''} width={'100%'} />
                                )
                            }
                            
                        </div>
                    </div>
                    <div className={style.viewInput}>
                        <span htmlFor="">Product Name</span>
                        <input type="text" value={data.name} onChange={handleChange} name='name' />
                        <span htmlFor="">Short Description</span>
                        <input type="text" value={data.short_description} onChange={handleChange} name='short_description' />
                        <span htmlFor="">Description</span>
                        <input type="text" value={data.description} onChange={handleChange} name='description' />
                        <span htmlFor="">Category</span>
                        {/* <input type="text" value={data.category} onChange={handleChange} name='category'/> */}
                        <select name="" id="" className={style.categories}>
                            {data.categories && data.categories.map((item)=>(
                                <option value="">{item._id}</option>
                            ))}
                        </select>
                        <span htmlFor="">SKU</span>
                        <input type="text" value={data.sku} onChange={handleChange} name='sku' />
                    </div>
                    
                </div>
                <div className={style.allBtn}>
                    <button>
                        <div className={style.btn}>
                            <img src={multiple} alt="multipleIcon" width={'100%'} />
                            <h1>Multiple</h1>
                        </div>
                    </button>
                    <button className={style.addVariantBtn}>
                        <div className={style.addVariantBtn}>
                            <img src={add} alt="addvariantIcon" width={'15%'} />
                            <h1>Add Variant</h1>
                        </div>
                    </button>
                    <button className={style.editProductBtn}>
                        <div className={style.editBtn} onClick={handleEditProduct}>
                            <img src={edit} alt="editIcon" />
                            <h1>Save</h1>
                        </div>
                    </button>
                    <button>
                        <div className={style.discontinueBtn}>
                            <img src={add} alt="discontinueIcon"  />
                            <h1>Discontinue</h1>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct