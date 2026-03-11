import apiPath from "../../consts/api/apiPath";
import shiprocketConfigFile from "../../consts/shiprocket/shiprocketConfigFile";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { setTokenShipRocket } from "../../services/store/slice/shipRocket/shipRocketSlice";

const ApiCallShiprocketAuth = async ({ dispatch }: { dispatch: any }) => {
  try {
    await api
      .post(apiPath.SHIPROCKET.AUTH_TOKEN, {
        email: shiprocketConfigFile.gmail,
        password: shiprocketConfigFile.key,
      })
      .then(async (res) => {
        await dispatch(setTokenShipRocket(res.data.token));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: err,
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: error,
      type: "error",
    });
  }
};
export default ApiCallShiprocketAuth;
