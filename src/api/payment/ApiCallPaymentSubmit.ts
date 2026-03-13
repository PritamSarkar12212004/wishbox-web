import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { updateOrderStatus } from "../../services/store/slice/order/orderSlice";

const ApiCallPaymentSubmit = async ({
  deliveryCharge,
  totoalPrice,
  userInfor,
  orderID,
  userId,
  utrValue,
  dispatch,
  updateOrderStatusInState,
}: {
  deliveryCharge: any;
  totoalPrice: any;
  userInfor: any;
  orderID: any;
  userId: any;
  utrValue: any;
  dispatch: any;
  updateOrderStatusInState: any;
}) => {
  try {
    if (
      !deliveryCharge ||
      !totoalPrice ||
      !userInfor ||
      !orderID ||
      !userId ||
      !utrValue
    ) {
      return Notify({
        message: "Payment Error Please Contact For Support",
        type: "error",
      });
    }
    await api
      .post(apiPath.PAYMENT_INFO.PAYMENT_SUBMIT, {
        deliveryCharge,
        totoalPrice,
        userInfor,
        orderID,
        userId,
        utrValue,
      })
      .then((res) => {
        dispatch(
          updateOrderStatus({
            orderId: res.data.orderId,
            status: res.data.orderStatus,
          }),
        );
        updateOrderStatusInState(res.data.orderStatus);
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Payment Error Please Contact For Support",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Payment Error Please Contact For Support",
      type: "error",
    });
  }
};
export default ApiCallPaymentSubmit;
