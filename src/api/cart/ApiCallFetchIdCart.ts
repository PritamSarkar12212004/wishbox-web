import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { cartIdDataSet } from "../../services/store/slice/cart/cartDataSlice";

const ApiCallFetchIdCart = async ({
  dispatch,
  userId,
}: {
  dispatch: any;
  userId: any;
}) => {
  try {
    api
      .post(apiPath.CART.FETCH_ID_CART, {
        userId,
      })
      .then((res) => {
        dispatch(cartIdDataSet(res.data.productIds));
        return true;
      })
      .catch((err) => {
        console.log(`error fetch id cart ${err}`);
        Notify({
          message: "Error Form Fetch Id Cart",
          type: "error",
        });
        return false;
      });
  } catch (error) {
    console.log(`error fetch id cart ${error}`);
    Notify({
      message: "Error Form Fetch Id Cart",
      type: "error",
    });
    return false;
  }
};
export default ApiCallFetchIdCart;
