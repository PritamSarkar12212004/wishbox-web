import storageToken from "../../consts/token/storage/storageToken";
import readData from "../storage/readData";

const checkLogin = async () => {
  const auth = await readData({
    key: storageToken.AUTH.USER_LOGIN_STATE,
  });

  return auth;
};
export default checkLogin;
