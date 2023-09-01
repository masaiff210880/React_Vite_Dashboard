import style from "../../Styles/ViewDetails.module.css";
import product1 from "../../assets/viewdetails/product1.svg";
import multiple from "../../assets/viewdetails/multiple.svg";
import edit from "../../assets/viewdetails/edit.svg";
import dis from "../../assets/viewdetails/dis.svg"
import add from "../../assets/viewdetails/add.svg"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const [data,setData] = useState("")
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => state.productReducer.products)
  // console.log(id);
  useEffect(() => {
    const data = product.find((el)=>el._id===id);
    setData(data)
  }, []);
  console.log(data)
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.productcontainer}>
          <div className={style.imgcontainer}>
            <img src={product1} alt="product1" className={style.product1Img} />
          </div>
        </div>
        <div className={style.product}>
          <p id={style.productclass}> Product Name</p>
          <div id={style.productname}>
            <div id={style.innermain}>
              <p id={style.innerText}>{data.name}</p>
            </div>
          </div>
          <p id={style.productclass}> Short Description</p>
          <div id={style.productname}>
            <div id={style.innermain}>
              <p id={style.innerText}>{data.short_description}</p>
            </div>
          </div>
          <p id={style.productclass}> Description</p>
          <div id={style.productname}>
            <div id={style.innermain1}>
              <p id={style.innerText1}>{data.description}</p>
            </div>
          </div>
          <p id={style.productclass}> Category</p>
          {/* <div id={style.productname}>
            <div id={style.innermain}>
              <p id={style.innerText}>{''}</p>
            </div>
          </div> */}
          <select className={style.categories}>
            {data.categories && data.categories.map((item)=>(
              <option value="">{item._id}</option>
            ))}
          </select>
          <p id={style.productclass}> SKU</p>
          <div id={style.productname}>
            <div id={style.innermain}>
              <p id={style.innerText}>{data.sku}</p>
            </div>
          </div>
        </div>
       
        <div className={style.allBtn}>
            <button>
              <div><img src={multiple} alt="multiple" /></div>
              <div>Multiple</div>
            </button>
            <button onClick={()=>navigate(`/product/add-variant/${id}`)}>
              <div><img src={add} alt="add" /></div>
              <div>Add Variant</div>
            </button>
            <button onClick={()=>navigate(`/product/edit/${id}`)}>
              <div><img src={edit} alt="edit" /></div>
              <div>Edit</div>
            </button>
            <button>
              <div><img src={dis} alt="dis" /></div>
              <div>Discontinue</div>
            </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
