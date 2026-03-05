import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";
import { initalMainFullWatchList } from "../../services/store/slice/watchlist/watchListMainProductSlice";

const ApiCallFullWatchlistData = async ({
  dispatch,
  userId,
}: {
  userId: any;
  dispatch: any;
}) => {
  try {
    await api
      .post(apiPath.WATCHLIST.FETCH_WATCHLIST_FULL_DATA, {
        userId: userId,
      })
      .then(async (res) => {
        await dispatch(initalMainFullWatchList(res.data.data));
        dispatch(mainLoaderTogel(false));
      })
      .catch((err) => {
        dispatch(mainLoaderTogel(false));
        console.log(err);
        Notify({
          message: "Error While Fetching WatchList Data",
          type: "error",
        });
      });
  } catch (error) {
    dispatch(mainLoaderTogel(false));
    console.log(error);
    Notify({
      message: "Error While Fetching WatchList Data",
      type: "error",
    });
  }
};
export default ApiCallFullWatchlistData;
