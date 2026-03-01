import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";
import {
  cartDataPush,
  cartIdDataSet,
} from "../../services/store/slice/cart/cartDataSlice";

const ApiCallCart = async ({
  dispatch,
  data,
  setLoadingCart,
}: {
  dispatch: any;
  data: any;
  setLoadingCart: any;
}) => {
  const payload = {
    totalAmount: data.price * data.quantity,
    user: data.userId,
    items: {
      product: data.item._id,
      title: data.item.title,
      price: data.item.pricing.salePrice,
      quantity: data.quantity,
      image: data.item.images.primary[0].url,
    },
  };
  await api
    .post(apiPath.CART.ADD_TO_CART, payload)
    .then(async (res) => {
      await dispatch(cartDataPush(res.data.product));
      await dispatch(cartIdDataSet(res.data.product._id));
      setLoadingCart(false);
      return true;
    })
    .catch((err) => {
      console.log(err);
      setLoadingCart(false);
      Notify({
        message: "Faild Add To Cart",
        type: "error",
      });
    });
  return false;
};
export default ApiCallCart;
