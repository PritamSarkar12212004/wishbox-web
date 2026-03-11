import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { paymentInfoData } from "../../services/store/slice/paymentInfo/paymentInfoSlice";

const ApiCallFetchPaymentInfo = async ({ dispatch }: { dispatch: any }) => {
  try {
    await api
      .post(apiPath.PAYMENT_INFO.FETCH_PAYMENT_INFO_ADMIN)
      .then((res) => {
        dispatch(paymentInfoData(res.data.data));
      })
      .catch(() => {
        Notify({
          message: "Error While Fetching Payment Info",
          type: "error",
        });
      });
  } catch (error) {
    Notify({
      message: "Error While Fetching Payment Info",
      type: "error",
    });
  }
};
export default ApiCallFetchPaymentInfo;
