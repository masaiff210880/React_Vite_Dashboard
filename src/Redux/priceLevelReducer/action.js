import axios from "axios";
// import { BE_BASE_URL } from "../../Base Url";
import {
  PRICE_LEVEL_FAILURE,
  PRICE_LEVEL_REQUEST,
  PRICE_LEVEL_SUCCESS,
} from "./actionType";
import { BE_BASE_URL } from "../../Base Url";

export const getPriceLevel = (dispatch) => {
    dispatch({ type: PRICE_LEVEL_REQUEST });
    axios
      .get(`${BE_BASE_URL}api/admin/get-level`)
      .then((res) => {
        dispatch({ type: PRICE_LEVEL_SUCCESS, payload: res.data});
      })
      .catch((error) => {
        dispatch({ type: PRICE_LEVEL_FAILURE });
      });
  };