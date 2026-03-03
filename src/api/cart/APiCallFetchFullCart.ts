import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { cartDataSet } from "../../services/store/slice/cart/cartDataSlice";

const APiCallFetchFullCart = async ({
  dispatch,
  id,
}: {
  dispatch: any;
  id: any;
}) => {
  try {
    api
      .post(apiPath.CART.FETCH_FULL_CART, {
        id: id,
      })
      .then((res) => {
        dispatch(cartDataSet(res.data.items));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error Form Fetch Full Cart",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error Form Fetch Full Cart",
      type: "error",
    });
  }
};
export default APiCallFetchFullCart;
