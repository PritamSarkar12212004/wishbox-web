import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";

const ApiCallcheckCourier = async ({
  token,
  pickupPostcode,
  deliveryPostcode,
  weight,
}) => {
  try {
    const data = await api
      .get(apiPath.SHIPROCKET.CHECK_COURIER, {
        params: {
          pickup_postcode: pickupPostcode,
          delivery_postcode: deliveryPostcode,
          weight: weight,
          cod: 0,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const couriers = res.data.data.available_courier_companies;
        const cheapest = couriers.reduce((prev, current) => {
          return prev.rate < current.rate ? prev : current;
        });
        const shippingPrice = Math.ceil(cheapest.rate);
        const data = {
          price: shippingPrice,
        };
        return data;
      })
      .catch((err) => {
        console.log(err);
        Notify({
          message: "Error From Courier Services",
          type: "error",
        });
      });
    return data;
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error From Courier Services",
      type: "error",
    });
  }
};
export default ApiCallcheckCourier;
