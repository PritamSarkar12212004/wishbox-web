import QRCode from "qrcode";

const paymentQrCode = async ({
  amount,
  upiID,
  name,
  orderId,
}: {
  amount: any;
  upiID: any;
  name: any;
  orderId: any;
}) => {
  const upiLink = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR&tn=Order-${orderId}`;
  const qr = await QRCode.toDataURL(upiLink);

  return qr;
};
export default paymentQrCode;
