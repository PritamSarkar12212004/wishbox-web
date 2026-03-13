import apiPath from "../../consts/api/apiPath";
import api from "../../services/api/api";

const ApiFetchOrderDetiles = async (orderID: any) => {
  try {
    const response = await api.post(apiPath.ORDER.FETCH_ORDER_BY_ID, {
      orderID,
    });
    return response.data.data;
  } catch (error: any) {
    console.error("Fetch Order Error:", error?.response?.data || error);

    return {
      success: false,
      message: "Failed to fetch order",
    };
  }
};

export default ApiFetchOrderDetiles;
