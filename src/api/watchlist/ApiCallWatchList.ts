import apiPath from "../../consts/api/apiPath";
import api from "../../services/api/api";
import { removeWatchListItem } from "../../services/store/slice/watchlist/watchListMainProductSlice";
import { toggleWatchlist } from "../../services/store/slice/watchlist/watchListProductSlice";

const ApiCallWatchList = async ({
  data,
  dispatch,
}: {
  data: any;
  dispatch: any;
}) => {
  dispatch(toggleWatchlist(data.id));
  dispatch(removeWatchListItem(data.id));

  try {
    await api.post(apiPath.WATCHLIST.ADD_WATCHLIST, data);
  } catch (error) {
    console.log(error);
    dispatch(toggleWatchlist(data.id));
    dispatch(removeWatchListItem(data.id));
  }
};
export default ApiCallWatchList;
