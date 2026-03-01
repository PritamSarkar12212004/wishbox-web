import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import { GallerySet } from "../../services/store/slice/Gallery/gallerySlice";
import { mainLoaderTogel } from "../../services/store/slice/loading/loadingSlice";

const ApiCallGalleryData = async (dispatch: any) => {
  try {
    await api
      .post(apiPath.GALLERY.FETCH_GALLERY_DATA)
      .then((res) => {
        dispatch(GallerySet(res.data.data));
        dispatch(mainLoaderTogel(false));
      })
      .catch(() => {
        dispatch(mainLoaderTogel(false));
        Notify({
          message: "Error To fetch Gallery Image ",
          type: "error",
        });
      });
  } catch (error) {
    Notify({
      message: "Error To fetch Gallery Image",
      type: "error",
    });
    dispatch(mainLoaderTogel(false));
  }
};
export default ApiCallGalleryData;
