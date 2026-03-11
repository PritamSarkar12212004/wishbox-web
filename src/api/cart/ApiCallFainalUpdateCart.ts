import apiPath from "../../consts/api/apiPath";
import routePath from "../../consts/routes/routePath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import {
  clearCartData,
  clearCartIdData,
} from "../../services/store/slice/cart/cartDataSlice";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";

const ApiCallFainalUpdateCart = async ({
  dispatch,
  data,
  navigate,
  userID,
}: {
  dispatch: any;
  data: any;
  navigate: any;
  userID: any;
}) => {
  try {
    await api
      .post(apiPath.CART.FAAINAL_UPDATE_CART_WITH_PLACE_ORDER, {
        data: data,
        userID,
      })
      .then((res) => {
        dispatch(clearCartIdData());
        dispatch(clearCartData());
        dispatch(mainLoaderTogel(false));
        navigate(routePath.PRIVATE_ROUTE.PAYMENT_PAGE, {
          state: {
            orderId: res.data.orderId,
          },
        });
        dispatch(mainLoaderTogel(false));
      })
      .catch(() => {
        Notify({
          message: "Error To Proced To Payment Page",
          type: "error",
        });
        dispatch(mainLoaderTogel(false));
      });
  } catch (error) {
    Notify({
      message: "Error To Proced To Payment Page",
      type: "error",
    });
    dispatch(mainLoaderTogel(false));
  }
};
export default ApiCallFainalUpdateCart;
