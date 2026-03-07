import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { CollectionSet } from "../../services/store/slice/collections/CollectionSlice";

const APiCallFetchFullColection = async ({ dispatch }: { dispatch: any }) => {
  try {
    await api
      .post(apiPath.COLLECTION.FETCH_FULL_COLLECTION)
      .then((res) => {
        dispatch(CollectionSet(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error While Fetching Collections",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error While Fetching Collections",
      type: "error",
    });
  }
};
export default APiCallFetchFullColection;
