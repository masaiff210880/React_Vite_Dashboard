import axios from "axios";
import { BE_BASE_URL } from "../../Base Url";
import {
  TOP_PRODUCT_SELLING_FAILURE,
  TOP_PRODUCT_SELLING_REQUEST,
  TOP_PRODUCT_SELLING_SUCCESS,
} from "./acitonType";

export const topsellingProduct = (dispatch) => {
  dispatch({ type: TOP_PRODUCT_SELLING_REQUEST });
  axios
    .get(`${BE_BASE_URL}api/product/top-selling`)
    .then((response) => {
      dispatch({ type: TOP_PRODUCT_SELLING_SUCCESS, payload: response.data });
    })
    .catch(() => {
      dispatch({ type: TOP_PRODUCT_SELLING_FAILURE });
    });
};
