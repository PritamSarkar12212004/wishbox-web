import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { ProductFullDataSet } from "../../services/store/slice/product/productSlice";

const ApiCallFetchFullProduct = async ({ dispatch }: { dispatch: any }) => {
  try {
    await api
      .post(apiPath.PRODUCT.FETCH_FULL_PRODUCT)
      .then((res) => {
        dispatch(ProductFullDataSet(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error While Fetching Shop Products",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error While Fetching Shop Products",
      type: "error",
    });
  }
};
export default ApiCallFetchFullProduct;
