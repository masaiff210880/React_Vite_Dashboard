import style from "../../Styles/AllProductList.module.css";
import productImg from "../../assets/ad/product.svg";
import { useDispatch, useSelector } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import { getProduct } from "../../Redux/productReducer/action";
import TopHeader from "../../Components/Header/TopHeader";
// import searchIcon from "../../assets/Icons/magnifier.svg";
// import sliverstar from "../../assets/ad/silver_start.svg";
// import goldstar from "../../assets/ad/gold star.svg";
// import platinum from "../../assets/ad/platinum.svg";
// import isolation from "../../assets/ad/isolation.svg";
import vector from "../../assets/ad/Vector.svg";
import sound from "../../assets/ad/Group 296.svg";
import eye from "../../assets/ad/Group 297.svg";
import edit from "../../assets/ad/pen.svg";
import treding from "../../assets/Icons/treading.svg";
import product from "../../assets/ad/list_product_1.svg";
import column_icon from "../../assets/Icons/column_icon.svg";
import {
  Checkbox,
  FormControl,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import silverIcon from "../../assets/Icons/silver_star_icon.svg";
import goldIcon from "../../assets/Icons/gold_star_icon.svg";
import platinumIcon from "../../assets/Icons/platinum_star_icon.svg";
import varifyStatus from "../../assets/Icons/toggle_status.svg";
import FilterAlert from "../../Components/Modal/FilterAlert";
import DeleteModal from "../../Components/Modal/DeleteModal";
import { Link, useSearchParams } from "react-router-dom";
import { topsellingProduct } from "../../Redux/topProductSellingReducer/action";

const category = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ITEM_HEIGHT = 150;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};
const column_options = [
  "UPC",
  "Tags",
  "Featured",
  "Date",
  "SEO Score",
  "Readability Score",
  "SEO Title",
  "Meta Desc.",
  "Keyphrase",
  "Outgoing internal links",
];
const AllProductList = () => {
  const [searchquery,setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [personName, setPersonName] = useState([]);
  const [columnoptions, setColumnOptions] = useState([]);
  const [brand, setBrand] = useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();

  const { data } = useSelector((store) => ({
    data: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));
  // console.log(data.length);
  const [parentChecked, setParentChecked] = useState(false);

  // State for child checkboxes
  const [childCheckboxes, setChildCheckboxes] = useState(Array(data.length).fill(false));

  // Handler for parent checkbox
  const handleParentCheckboxChange = () => {
    const newParentChecked = !parentChecked;
    setParentChecked(newParentChecked);
    setChildCheckboxes(newParentChecked ? Array(data.length).fill(true) : Array(data.length).fill(false));
  };

  // Handler for child checkboxes
  const handleChildCheckboxChange = (index) => {
    const newChildCheckboxes = [...childCheckboxes];
    newChildCheckboxes[index] = !newChildCheckboxes[index];

    // If all child checkboxes are now checked, update the parent checkbox
    const allChecked = newChildCheckboxes.every(checked => checked);
    setParentChecked(allChecked);

    setChildCheckboxes(newChildCheckboxes);
  };

  //  const productId = useParams();

  // console.log("ID", productId)
  // Top Selling Products
  const topSellingProducts = useSelector(
    (store) => store.topseelingproudctRedeucer.topsellingProducts.data
  );
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleColumnOptions = (event) => {
    const {
      target: { value },
    } = event;
    setColumnOptions(typeof value === "string" ? value.split(",") : value);
  };
  // console.log(column_options);
  useEffect(() => {
    dispatch(getProduct(page));
  }, [page]);
  // Product Delete

  useEffect(() => {
    dispatch(topsellingProduct);
  }, []);

  // console.log("ddddddddddddddddddddddd", data);
  const handleOption = (e) => {
    let newBrand = [...brand];
    const value = e.target.value;
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  // console.log(topSellingProducts)
  return (
    <div className={style.adminContainer}>
      <div className={style.topHeader}>
        <TopHeader headerName={"Add New Product"} />
      </div>
      {/* Card Body */}
      <div className={style.topSellingProducts}>Top Selling products</div>
      <div className={style.products}>
        {topSellingProducts?.map((item, index) => (
          <div className={style.card}>
            <div style={{ backgroundColor: index % 2 == 0 ? "#0ac078" : "#ee4652" }}>
              <span>{item.total_sales}</span>
              <img src={treding} alt="" />
            </div>
            <img
              className={style.cardImage}
              src={item.featuredImage.src}
              alt="productImg"
            />
            <div className={style.product_info}>
              <h1>{item.name.substring(0, 40)}</h1>
            </div>
            <div className={style.sku_info}>SKU:{item.sku}</div>
          </div>
        ))}
      </div>
      {/* Product List */}
      <div className={style.list_container}>
        <div className={style.category_drop_down}>
          <div>
            <FormControl sx={{ m: 0, width: 415 }}>
              <Select
                // multiple
                className={style.select_box}
                style={{ borderRadius: 10 }}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={style.category_header}>Select Category</em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  {/* <em>Placeholder</em> */}
                </MenuItem>
                {category.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <Button
              className={style.filter_btn}
              startIcon={<img src={filterIcon} />}
              onClick={handleClickOpen}
            >
              Filter
            </Button> */}
            <FilterAlert />
            {/* <Button
              className={style.column_btn}
              startIcon={<img src={column_icon} />}
            >
              Column Options
            </Button> */}
            <FormControl sx={{ m: 0, width: 230 }}>
              <Select
                // multiple
                className={style.select_box_column_options}
                displayEmpty
                value={columnoptions}
                name="columnoptions"
                onChange={handleColumnOptions}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <div className={style.options}>
                        <img src={column_icon} width={"15%"} />
                        <em className={style.category_header}>
                          Column Options
                        </em>
                      </div>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  {/* <em>Placeholder</em> */}
                </MenuItem>
                {column_options.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <div className={style.option_lists}>
                      <div> {name}</div>
                      <div>
                        <Checkbox
                          type={"checkbox"}
                          onChange={handleOption}
                          value={name}
                          defaultChecked={brand.includes(name)}
                        />
                      </div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={style.searchinput}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by name"
                inputProps={{ "aria-label": "search google maps" }}
                value={searchquery}
                onChange={(e)=>setSearchQuery(e.target.value)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              ></IconButton>
            </Paper>
          </div>
        </div>
        {/* Product Table */}
        <table className={style.product_table}>
          <thead className={style.product_heading_row}>
            <tr>
              <th className={style.heading_checkbox}>
                <input 
                  type="checkbox"
                  checked={parentChecked}
                  onChange={handleParentCheckboxChange}
                  className={style.customCheckbox}
                />
              </th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Verify Status</th>
              {brand?.map((el) => (
                <th style={{ textAlign: "center" }}>{el}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={style.table_body_column}>
            {data?.map((item, index) => {
              const isChecked = childCheckboxes[index];
console.log('search query',searchquery)
              return (
                <tr
                  style={{
                    backgroundColor:
                      index % 2 == 0 ? "white" : "rgba(77, 175, 230, 0.10)",
                  }}
                  key={index}
                >
                  <td className={style.heading_checkbox}>
                    <input 
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleChildCheckboxChange(index)}
                      className={style.customCheckbox}

                    />
                  </td>
                  <td className={style.td_img_bg}>
                    <div>
                      <img
                        src={item.featuredImage.src}
                        alt={item.featuredImage.alt}
                        width={"100%"}
                      />
                    </div>
                  </td>
                  <td className={style.product_name}>
                    <div>{item.name.substring(0, 20)}</div>
                    <div>{item.sku}</div>
                  </td>
                  <td className={style.price_column}>
                    <div>
                      <div className={style.silver_list}>
                        <div>
                          <img src={silverIcon} alt="grayIcon" />
                        </div>
                        <div>Silver</div>
                      </div>
                      <div className={style.tbody_product_price}>$ 20</div>
                    </div>
                    <div>
                      <div className={style.silver_list}>
                        <div>
                          <img src={goldIcon} alt="grayIcon" />
                        </div>
                        <div>Gold</div>
                      </div>
                      <div className={style.tbody_product_price}>$ 20</div>
                    </div>
                    <div>
                      <div className={style.silver_list}>
                        <div>
                          <img src={platinumIcon} alt="grayIcon" />
                        </div>
                        <div>Platinum</div>
                      </div>
                      <div className={style.tbody_product_price}>$ 20</div>
                    </div>
                  </td>
                  <td>1200</td>
                  <td>Delta Gummies</td>
                  <td className={style.verifyStatus}>
                    <img src={varifyStatus} alt="varifyStatus" />
                  </td>
                  {brand?.map(() => (
                    <td
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600px",
                        lineHeight: "normal",
                      }}
                    >
                      {"AD"}
                    </td>
                  ))}
                  <td className={style.action_Btn}>
                    <button>
                      <img src={vector} alt="vector" />
                    </button>
                    <button>
                      <img src={sound} alt="sound" />
                    </button>
                    <Link to={`/view-product/${item._id}`}>
                      <button  className={style.eyeStylebtn} >
                        <img src={eye} alt="eye"  />
                      </button>
                    </Link>
                    <Link to={`/product/edit/${item._id}`}>
                      <button className={style.editStylebtn}>
                        <img src={edit} alt="edit" />
                      </button>


                      {/* <button
                    className={style.marketingBtn3}
                    onClick={() => handleDelete(item._id)}
                  >
                    <img src={del} alt="delIcon" width={"100%"} />
                  </button> */}
                    </Link>

                    <DeleteModal id={item._id} />
                  </td>
                </tr>
              )

            })}
          </tbody>
        </table>
        {/* Product Table */}
        {/* Pagination */}
        <div className={style.pagination_box}>
          {data && data.length > 0 && (
            <Pagination
              count={data.length}
              shape="rounded"
              defaultPage={page}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "16px",
                  padding: "20px",
                },
                "& .MuiPaginationItem-icon": {
                  fontSize: "30px",
                },
              }}
              onChange={(event, value) => setPage(value)}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default AllProductList;
