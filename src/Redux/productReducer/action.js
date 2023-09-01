import axios from "axios";  
import { BE_BASE_URL } from "../../Base Url";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";
// Product Get Request
export const getProduct = (page)=>(dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(`${BE_BASE_URL}api/product/all?page=${page}`)
    .then((res) => {
     
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
// Product Delete Request
export const getProductDelete = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  return axios.delete(`${BE_BASE_URL}api/product/delete/${id}`)
    .then(() => {
      dispatch({ type: PRODUCT_SUCCESS })
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE })
    })
}
// // Product Add Request
export const addProduct = (products) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  return axios.post(`${BE_BASE_URL}api/product/add`, products)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS });
      console.log(res)
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE })
    })
}
// Get Single Product with id
export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.get(`${BE_BASE_URL}api/product/one/${id}`)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data.data })
    })
    .then(() => {
      dispatch({ type: PRODUCT_FAILURE })
    })
}
// //Product Edit Request
export const editProduct = (id,data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST })
  axios.patch(`${BE_BASE_URL}api/product/update/${id}`, data)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS })
      console.log(res)
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE })
    })
}
// // Variant Post Request
export const addVariant = (id, variants) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios.post(`${BE_BASE_URL}api/variant/add/${id}`, { variants })
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS })
      console.log(res)
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE })
    })
}






