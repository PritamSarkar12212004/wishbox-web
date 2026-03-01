import key from "../../consts/secure/key";
import storageToken from "../../consts/token/storage/storageToken";
import Notify from "../../functions/notify/Notify";
import { clearUserTempData } from "../../services/store/slice/user/userDataSlice";
import storeData from "../../functions/storage/storeData";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";
const ApiOtpVarify = async ({
  storeOpt,
  userOtp,
  dispatch,
  id,
}: {
  storeOpt: string;
  userOtp: string;
  dispatch: any;
  id: string;
}) => {
  dispatch(mainLoaderTogel(true));
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (userOtp === storeOpt) {
      Notify({
        message: "Verify OTP Successful",
        type: "success",
      });
      await dispatch(mainLoaderTogel(false));
      await storeData({
        key: storageToken.AUTH.USER_LOGIN_STATE,
        value: key.AUTH_LOGIN.USER_LOGIN_TOKEN_VALUE,
      });
      await storeData({
        key: storageToken.USER_INFO.USER_ID_INFO,
        value: id,
      });
      dispatch(clearUserTempData());
      window.location.reload();
      return true;
    } else {
      Notify({
        message: "Failed to Verify OTP",
        type: "error",
      });
      dispatch(mainLoaderTogel(false));
      return false;
    }
  } catch (error) {
    Notify({
      message: "Failed to Verify OTP",
      type: "error",
    });
    dispatch(mainLoaderTogel(false));
    return false;
  }
};

export default ApiOtpVarify;
