import apiPath from "../../consts/api/apiPath";
import Notify from "../../functions/notify/Notify";
import api from "../../services/api/api";

const APiCallFullContact = async ({
  data,
  supportType,
}: {
  data: any;
  supportType: any;
}) => {
  try {
    console.log(supportType);
    await api
      .post(apiPath.CONTACT.FULL_CONTACT, {
        supportEmail: data.email,
        supportMessage: data.message,
        supportName: data.name,
        supportPhoneNumber: data.phone,
        supportSubject: data.subject,
        supportType: supportType,
      })
      .then(() => {
        Notify({
          message: "Support request submitted successfully",
          type: "success",
        });
      })
      .catch(() => {
        Notify({
          message: "Failde To Connect Support",
          type: "error",
        });
      });
  } catch (error) {
    Notify({
      message: "Failde To Connect Support",
      type: "error",
    });
  }
};
export default APiCallFullContact;
