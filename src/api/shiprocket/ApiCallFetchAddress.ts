import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";

const ApiCallFetchAddress = async ({ pincode }: { pincode: any }) => {
  try {
    const res = await api.get(apiPath.SHIPROCKET.CHECK_ADDRESS + pincode);
    const address = res.data[0].PostOffice[0];
    const district = address.District;
    const state = address.State;
    const city = address.Name;
    return {
      city,
      district,
      state,
    };
  } catch (error) {
    console.log(error);
    Notify({
      message: "Error Fetch  Address Data",
      type: "error",
    });
  }
};

export default ApiCallFetchAddress;
