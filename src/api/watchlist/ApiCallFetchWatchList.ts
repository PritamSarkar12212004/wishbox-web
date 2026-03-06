import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { initSetIdWatchListData } from "../../services/store/slice/watchlist/watchlistProductSlice";

const ApiCallFetchWatchList = async ({
  dispatch,
  data,
}: {
  dispatch: any;
  data: any;
}) => {
  try {
    await api
      .post(apiPath.WATCHLIST.FETCH_WATCHLIST, {
        userID: data,
      })
      .then((res) => {
        dispatch(initSetIdWatchListData(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error To fetch WatchList",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error To fetch WatchList",
      type: "error",
    });
  }
};
export default ApiCallFetchWatchList;
