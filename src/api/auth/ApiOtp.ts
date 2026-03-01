import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import {
  SetOneTimePasssword,
  SetPhoneNumber,
} from "../../services/store/slice/auth/authSlice";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";
import { userTempDataSet } from "../../services/store/slice/user/userDataSlice";

const ApiOtp = async ({
  phone,
  dispatch,
}: {
  phone: string;
  dispatch: any;
}) => {
  dispatch(mainLoaderTogel(true));
  await api
    .post(apiPath.AUTH.CALL_OTP, { phone })
    .then(async (res: any) => {
      dispatch(SetPhoneNumber(res.data.otpData.data.phoneNumber));
      dispatch(SetOneTimePasssword(res.data.otpData.data.otp));
      dispatch(userTempDataSet(res.data.userId));
      Notify({
        message: res.data.message,
        type: "success",
      });
      dispatch(mainLoaderTogel(false));
    })
    .catch(() => {
      Notify({
        message: "Failed to send OTP",
        type: "error",
      });
      dispatch(mainLoaderTogel(false));
    })
    .catch(() => {
      Notify({
        message: "Failed to send OTP",
        type: "error",
      });
      dispatch(mainLoaderTogel(false));
    });
};
export default ApiOtp;
