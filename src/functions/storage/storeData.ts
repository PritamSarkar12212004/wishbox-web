import CryptoJS from "crypto-js";
import keyToken from "../../consts/secure/key";
const storeData = async ({ key, value }: { key: string; value: any }) => {
  try {
    const stringValue = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(
      stringValue,
      keyToken.CRYPTO.CRYPTO_TOKEN_SECURE_KEY,
    ).toString();
    localStorage.setItem(key, encrypted);
    return true;
  } catch (err) {
    console.error("Error saving secure data:", err);
    return false;
  }
};
export default storeData;
