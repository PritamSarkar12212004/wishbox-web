import CryptoJS from "crypto-js";
const storeData = ({ key, value }: { key: string; value: any }) => {
  try {
    const stringValue = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(
      stringValue,
      "mySecretKey",
    ).toString();
    localStorage.setItem(key, encrypted);
  } catch (err) {
    console.error("Error saving secure data:", err);
  }
};
export default storeData;
