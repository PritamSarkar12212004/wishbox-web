import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { updateOrderStatus } from "../../services/store/slice/order/orderSlice";

const ApiCalllCancelOrder = async ({
  dispatch,
  userId,
  productId,
  setCancelLoading,
}: {
  dispatch: any;
  userId: any;
  productId: any;
  setCancelLoading: any;
}) => {
  try {
    await api
      .post(apiPath.ORDER.CANCEL_ORDER, {
        userId,
        orderId: productId,
      })
      .then((res) => {
        dispatch(
          updateOrderStatus({
            orderId: productId,
            status: res.data.order.orderStatus,
          }),
        );
        Notify({
          message: "Order cancelled successfully",
          type: "success",
        });
        setCancelLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setCancelLoading(false);
        Notify({
          message: "Error While Cancaling Order",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    setCancelLoading(false);
    Notify({
      message: "Error While Cancaling Order",
      type: "error",
    });
  }
};
export default ApiCalllCancelOrder;
