import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";

const ApiCallProductImageFetch = async ({
  gItem,
  dispatch,
}: {
  gItem: any;
  dispatch: any;
}) => {
  try {
    const res = await api.post(apiPath.PRODUCT.FETCH_PRODUCT_IMAGE, gItem);
    dispatch(mainLoaderTogel(false));

    return res.data.data;
  } catch (err: any) {
    console.error("Fetch Product Image Error:", err);
    dispatch(mainLoaderTogel(false));

    Notify({
      message: "Error Due to Fetching Product Image",
      type: "error",
    });

    return null;
  }
};

export default ApiCallProductImageFetch;
