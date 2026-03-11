import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { orderFullData } from "../../services/store/slice/order/orderSlice";

const ApiCallFetchOrder = async ({
  dispatch,
  userID,
}: {
  dispatch: any;
  userID: any;
}) => {
  try {
    await api
      .post(apiPath.ORDER.FETCH_FULL_ORDER, {
        userID,
      })
      .then((res) => {
        dispatch(orderFullData(res.data.orders));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error While Fetching Orders",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error While Fetching Orders",
      type: "error",
    });
  }
};
export default ApiCallFetchOrder;
