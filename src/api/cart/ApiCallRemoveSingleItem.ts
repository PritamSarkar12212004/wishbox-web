import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import {
  removeCartId,
  removeCartItem,
} from "../../services/store/slice/cart/cartDataSlice";

const ApiCallRemoveSingleItem = async ({
  data,
  removeFun,
  dispatch,
  setRemoveLoading,
}: {
  data: any;
  removeFun: any;
  dispatch: any;
  setRemoveLoading: any;
}) => {
  try {
    await api
      .post(apiPath.CART.REMOVE_SINGLE_ITEM_CART, {
        userId: data.userId,
        item: data.item,
      })
      .then(() => {
        removeFun(data.item);
        dispatch(removeCartItem(data.item));
        dispatch(removeCartId(data.item));
        setRemoveLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error Form remove Cart Items",
          type: "error",
        });
        setRemoveLoading(false);
        return false;
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error Form remove Cart Items",
      type: "error",
    });
    setRemoveLoading(false);
    return false;
  }
};
export default ApiCallRemoveSingleItem;
