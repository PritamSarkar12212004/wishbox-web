import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { CollectionSet } from "../../services/store/slice/collections/CollectionSlice";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";
import { ProductSet } from "../../services/store/slice/product/productSlice";

const ApiCallFetchDashBoard = async ({ dispatch }: { dispatch: any }) => {
  api
    .post(apiPath.DASHBOARD.FETCH_DASHBOARD_DATA)
    .then(async (res) => {
      const products = await res.data.data.products;
      await dispatch(CollectionSet(res.data.data.collections));
      await dispatch(ProductSet(products));
      dispatch(mainLoaderTogel(false));
    })
    .catch((err) => {
      dispatch(mainLoaderTogel(false));
      Notify({
        message: err,
        type: "error",
      });
    })
    .catch((err) => {
      dispatch(mainLoaderTogel(false));
      Notify({
        message: err,
        type: "error",
      });
    });
};
export default ApiCallFetchDashBoard;
