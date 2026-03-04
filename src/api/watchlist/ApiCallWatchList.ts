import apiPath from "../../consts/api/apiPath";
import api from "../../services/api/api";
import { toggleWatchlist } from "../../services/store/slice/watchlist/watchListProductSlice";

const ApiCallWatchList = async ({
  data,
  dispatch,
}: {
  data: any;
  dispatch: any;
}) => {
  dispatch(toggleWatchlist(data.id));
  try {
    await api.post(apiPath.WATCHLIST.ADD_WATCHLIST, data);
  } catch (error) {
    console.log(error);
    dispatch(toggleWatchlist(data.id));
  }
};
export default ApiCallWatchList;
