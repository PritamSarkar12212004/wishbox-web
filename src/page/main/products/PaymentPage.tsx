import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    FaCheck,
    FaUpload,
    FaHeadset,
    FaCopy,
    FaSpinner,
    FaQrcode,
    FaRegCheckCircle,
    FaHourglassHalf,
    FaExclamationCircle,
    FaTimesCircle,
    FaDownload,
    FaTruck,
    FaBoxOpen,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import ApiCallFetchPaymentInfo from '../../../api/payment/ApiCallFetchPaymentInfo';
import ApiCalllCancelOrder from '../../../api/order/ApiCalllCancelOrder';
import ApiCallShiprocketAuth from '../../../api/shiprocket/ApiCallShiprocketAuth';
import ApiCallFetchAddress from '../../../api/shiprocket/ApiCallFetchAddress';
import ApiCallcheckCourier from '../../../api/shiprocket/ApiCallcheckCourier';
import ApiCallPaymentSubmit from '../../../api/payment/ApiCallPaymentSubmit';
import shiprocketConfigFile from '../../../consts/shiprocket/shiprocketConfigFile';
import ApiFetchOrderDetiles from '../../../api/payment/ApiFetchOrderDetiles';

// Types
interface OrderItem {
    product?: {
        title: string;
        images?: {
            primary?: { url: string }[];
        };
    };
    title?: string;
    image?: string;
    quantity: number;
    price: number;
}

interface OrderData {
    _id: string;
    orderId: string;
    items: OrderItem[];
    totalAmount: number;
    payment: {
        paymentStatus: 'waiting_payment' | 'pending_verification' | 'paid' | 'failed';
        utr: string | null;
    };
    orderStatus: string;
    customer?: {
        name: string;
        email?: string;
        phone?: string;
    };
    createdAt: string;
    updatedAt: string;
}

interface PaymentInfo {
    upiId?: string;
    qrImageUrl?: string;
    accountName?: string;
    bankName?: string;
}

interface Address {
    fullName: string;
    pincode: string;
    addressLine: string;
    city: string;
    district: string;
    state: string;
}

const statusSteps = [
    { key: 'checkout_initiated', label: 'Checkout Initiated', icon: FaHourglassHalf },
    { key: 'payment_pending', label: 'Payment Pending', icon: FaHourglassHalf },
    { key: 'payment_verification', label: 'Verifying Payment', icon: FaSpinner },
    { key: 'order_placed', label: 'Order Placed', icon: FaRegCheckCircle },
    { key: 'confirmed', label: 'Confirmed', icon: FaCheck },
    { key: 'shipped', label: 'Shipped', icon: FaTruck },
    { key: 'delivered', label: 'Delivered', icon: FaCheck },
];

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const paymentInfo = useSelector((state: any) => state.paymentInfoSlice?.paymentInfoData) as PaymentInfo | null;
    const userId = useSelector((state: any) => state.userDataSlice.mainUserID);
    const shiprocketToken = useSelector((state: any) => state.shipRocketSlice?.token);

    // Step management
    const [currentStep, setCurrentStep] = useState<'address' | 'payment'>('address');

    const [address, setAddress] = useState<Address>({
        fullName: '',
        pincode: '',
        addressLine: '',
        city: '',
        district: '',
        state: '',
    });

    const [deliveryCharge, setDeliveryCharge] = useState<number>(0);
    const [totalWithDelivery, setTotalWithDelivery] = useState<number>(0);
    const [ordersData, setOrdersData] = useState<OrderData | null>(null);
    const [utr, setUtr] = useState('');
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [cancelling, setCancelling] = useState(false);
    const [cancelSuccess, setCancelSuccess] = useState(false);
    const [fetchingAddress, setFetchingAddress] = useState(false);
    const [calculatingDelivery, setCalculatingDelivery] = useState(false);


    const fetchDataById = async () => {
        const data = await ApiFetchOrderDetiles(location.state.orderId)
        setOrdersData(data as OrderData);

    }
    useEffect(() => {
        if (location.state?.fullData == true) {
            console.log(location.state.item)
            setOrdersData(location.state.item as OrderData);
        } else {
            fetchDataById()
        }
    }, [location.state]);

    // Fetch payment info and generate ShipRocket token
    useEffect(() => {
        const fetchPaymentInfo = async () => {
            setLoading(true);
            try {
                await ApiCallFetchPaymentInfo({ dispatch });
                await ApiCallShiprocketAuth({ dispatch }); // token stored in Redux
            } catch (error) {
                console.error('Failed to fetch payment info:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPaymentInfo();
    }, [dispatch]);

    // Auto-fill address when pincode is 6 digits
    useEffect(() => {
        const fetchAddress = async () => {
            if (address.pincode.length === 6) {
                setFetchingAddress(true);
                try {
                    const result = await ApiCallFetchAddress({ pincode: address.pincode });
                    if (result) {
                        setAddress(prev => ({
                            ...prev,
                            city: result.city || '',
                            district: result.district || '',
                            state: result.state || '',
                        }));
                    }
                } catch (error) {
                    console.error('Address fetch failed:', error);
                } finally {
                    setFetchingAddress(false);
                }
            }
        };
        fetchAddress();
    }, [address.pincode]);

    // Handlers
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleAddressSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ordersData) return;
        setCalculatingDelivery(true);
        try {
            const pickupPostcode = shiprocketConfigFile.pickupPostcode || '411061';
            const weight = ordersData?.totalWeight ? ordersData?.totalWeight : 1;
            const courierResult = await ApiCallcheckCourier({
                token: shiprocketToken,
                pickupPostcode,
                deliveryPostcode: address.pincode,
                weight,
            });
            const charge = courierResult?.price || 0;
            setDeliveryCharge(charge);
            setTotalWithDelivery(ordersData.totalAmount + charge);
            setCurrentStep('payment');
        } catch (error) {
            console.error('Courier calculation failed:', error);
        } finally {
            setCalculatingDelivery(false);
        }
    };

    const handleCopy = async () => {
        if (!paymentInfo?.upiId) return;
        try {
            await navigator.clipboard.writeText(paymentInfo.upiId);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setScreenshot(e.target.files[0]);
        }
    };

    // Real payment submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!utr || !ordersData?._id) return;

        setSubmitting(true);
        try {
            await ApiCallPaymentSubmit({
                deliveryCharge: deliveryCharge,
                totoalPrice: ordersData.totalAmount,
                userInfor: address,
                orderID: ordersData.orderId,
                userId: userId,
                utrValue: utr,
                dispatch: dispatch,
                updateOrderStatusInState: (newStatus: string) => {
                    setOrdersData(prev => prev ? { ...prev, orderStatus: newStatus } : null);
                    setSubmitted(true);
                }
            });
        } catch (error) {
            console.error('Submission failed:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancelOrder = async () => {
        if (!ordersData?._id) return;
        setCancelling(true);
        try {
            await ApiCalllCancelOrder({
                dispatch,
                userId,
                productId: ordersData._id,
                setCancelLoading: setCancelling,
            });
            setCancelSuccess(true);
            setTimeout(() => {
                setCancelModalOpen(false);
                setCancelSuccess(false);
                setOrdersData(prev => prev ? { ...prev, orderStatus: 'cancelled' } : null);
            }, 1500);
        } catch (error) {
            console.error('Cancellation failed:', error);
            setCancelling(false);
            setCancelModalOpen(false);
        }
    };

    const handleDownloadInvoice = () => {
        alert('Invoice download started (demo)');
    };

    // Derived state
    const paymentStatus = ordersData?.payment?.paymentStatus || 'waiting_payment';
    const orderStatus = ordersData?.orderStatus || 'checkout_initiated';

    const isWaiting = paymentStatus === 'waiting_payment';
    const isPendingVerification = paymentStatus === 'pending_verification';
    const isPaid = paymentStatus === 'paid';
    const isFailed = paymentStatus === 'failed';
    const isCancelled = orderStatus === 'cancelled';

    const currentStatusIndex = statusSteps.findIndex(s => s.key === orderStatus);

    // Cancel allowed only during payment pending (waiting_payment) and not cancelled/paid/shipped/delivered
    const canCancel = isWaiting && !['cancelled', 'paid', 'shipped', 'delivered'].includes(orderStatus);

    const getItemImage = (item: OrderItem): string => {
        return (
            item.image ||
            item.product?.images?.primary?.[0]?.url ||
            'https://via.placeholder.com/80?text=No+Image'
        );
    };

    const getItemTitle = (item: OrderItem): string => {
        return item.product?.title || item.title || 'Product';
    };

    // Loading / Error states
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600"></div>
            </div>
        );
    }

    if (!ordersData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
                    <FaExclamationCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
                    <p className="text-gray-600 mb-6">We couldn't find your order details. Please contact support.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    // Main render
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* ORDER SUMMARY CARD */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span
                                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${isCancelled
                                        ? 'bg-red-100 text-red-800'
                                        : isPendingVerification
                                            ? 'bg-blue-100 text-blue-800'
                                            : isWaiting
                                                ? 'bg-amber-100 text-amber-800'
                                                : isPaid
                                                    ? 'bg-green-100 text-green-800'
                                                    : isFailed
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {isCancelled ? (
                                        <FaTimesCircle className="mr-2" />
                                    ) : isPendingVerification ? (
                                        <FaSpinner className="mr-2 animate-spin" />
                                    ) : isWaiting ? (
                                        <FaHourglassHalf className="mr-2" />
                                    ) : isPaid ? (
                                        <FaRegCheckCircle className="mr-2" />
                                    ) : isFailed ? (
                                        <FaTimesCircle className="mr-2" />
                                    ) : null}
                                    {isCancelled
                                        ? 'Cancelled'
                                        : isPendingVerification
                                            ? 'Payment Verification'
                                            : ordersData.orderStatus || 'Payment Pending'}
                                </span>
                                {isPaid && (
                                    <button
                                        onClick={handleDownloadInvoice}
                                        className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold hover:bg-indigo-100 transition"
                                    >
                                        <FaDownload className="mr-2" /> Invoice
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
                                <div>
                                    <span className="font-medium text-gray-700">Order ID:</span>{' '}
                                    <span className="font-mono break-all">{ordersData.orderId}</span>
                                </div>
                                <div className="hidden sm:block text-gray-300">|</div>
                                <div>
                                    <span className="font-medium text-gray-700">Placed on:</span>{' '}
                                    {new Date(ordersData.createdAt).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-800">Items ({ordersData.items?.length})</h3>
                                <div className="divide-y divide-gray-100">
                                    {ordersData.items?.map((item, idx) => {
                                        const imageUrl = getItemImage(item);
                                        const title = getItemTitle(item);
                                        const quantity = item.quantity || 1;
                                        const price = item.price || 0;
                                        const total = price * quantity;

                                        return (
                                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center py-4 gap-4">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={imageUrl}
                                                        alt={title}
                                                        className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-base font-medium text-gray-900 truncate">{title}</p>
                                                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                                                        <span className="text-gray-500">Qty: {quantity}</span>
                                                        <span className="text-gray-500">Price: ₹{price}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-500">Total</p>
                                                    <p className="text-lg font-semibold text-gray-900">₹{total}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Total Amount */}
                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-base font-medium text-gray-700">Subtotal</span>
                                    <span className="text-lg font-semibold text-gray-900">₹{ordersData.totalAmount}</span>
                                </div>
                                {currentStep === 'payment' && !isCancelled && (
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-base font-medium text-gray-700">Delivery Charge</span>
                                        <span className="text-lg font-semibold text-gray-900">₹{deliveryCharge}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                                    <span className="text-base font-bold text-gray-800">Total</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {currentStep === 'payment' && !isCancelled
                                            ? `₹${totalWithDelivery}`
                                            : `₹${ordersData.totalAmount}`}
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 text-right">Inclusive of all taxes</p>

                            {/* Cancel button - only shown during payment pending */}
                            {canCancel && (
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setCancelModalOpen(true)}
                                        className="w-full sm:w-auto px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition text-sm font-medium"
                                    >
                                        Cancel Order
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CANCELLED ORDER MESSAGE */}
                {isCancelled && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="p-6 sm:p-8">
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                                <FaTimesCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Order Cancelled</h2>
                                <p className="text-gray-600">
                                    This order has been cancelled. If you have any questions, please contact support.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* FOR NON-CANCELLED ORDERS */}
                {!isCancelled && (
                    <>
                        {/* ORDER TIMELINE (if payment completed or verification) */}
                        {!isWaiting && (
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FaBoxOpen className="text-indigo-500" />
                                        Order Status
                                    </h2>
                                    {/* Responsive timeline with horizontal scroll on mobile */}
                                    <div className="overflow-x-auto pb-2">
                                        <div className="relative min-w-[600px] sm:min-w-0">
                                            <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded"></div>
                                            <div
                                                className="absolute top-5 left-0 h-1 bg-indigo-600 rounded transition-all duration-500"
                                                style={{ width: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%` }}
                                            ></div>
                                            <div className="relative flex justify-between">
                                                {statusSteps.map((step, index) => {
                                                    const Icon = step.icon;
                                                    const isActive = index <= currentStatusIndex;
                                                    const isCurrent = index === currentStatusIndex;
                                                    return (
                                                        <div key={step.key} className="flex flex-col items-center text-center">
                                                            <div
                                                                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${isActive
                                                                    ? 'bg-indigo-600 text-white'
                                                                    : 'bg-gray-200 text-gray-500'
                                                                    } ${isCurrent ? 'ring-4 ring-indigo-200' : ''}`}
                                                            >
                                                                <Icon className="w-5 h-5" />
                                                            </div>
                                                            <span className="text-xs mt-2 font-medium text-gray-700 max-w-[70px] truncate sm:max-w-none sm:whitespace-normal">
                                                                {step.label}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PAYMENT UNDER VERIFICATION MESSAGE */}
                        {isPendingVerification && (
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="p-6 sm:p-8">
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                                        <FaSpinner className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Under Verification</h2>
                                        <p className="text-gray-600">
                                            Your payment is being verified. This usually takes a few minutes. You will receive a confirmation once done.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 1: ADDRESS FORM (only if waiting and address step) */}
                        {isWaiting && currentStep === 'address' && (
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-indigo-500" />
                                        Shipping Address
                                    </h2>
                                    <form onSubmit={handleAddressSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={address.fullName}
                                                onChange={handleAddressChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                                                Pincode <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={address.pincode}
                                                onChange={handleAddressChange}
                                                required
                                                pattern="[0-9]{6}"
                                                maxLength={6}
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                            />
                                            {fetchingAddress && (
                                                <p className="text-xs text-indigo-600 mt-1 flex items-center gap-1">
                                                    <FaSpinner className="animate-spin" /> Fetching address...
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="addressLine" className="block text-sm font-medium text-gray-700 mb-1">
                                                Address Line <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="addressLine"
                                                name="addressLine"
                                                value={address.addressLine}
                                                onChange={handleAddressChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                                    City <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={address.city}
                                                    onChange={handleAddressChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                                                    District <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="district"
                                                    name="district"
                                                    value={address.district}
                                                    onChange={handleAddressChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                                    State <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={address.state}
                                                    onChange={handleAddressChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={calculatingDelivery || fetchingAddress}
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-4 flex items-center justify-center gap-2"
                                        >
                                            {calculatingDelivery ? (
                                                <>
                                                    <FaSpinner className="animate-spin" />
                                                    Calculating Delivery...
                                                </>
                                            ) : (
                                                'Continue to Payment'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: PAYMENT + UTR SUBMISSION (only if waiting and payment step) */}
                        {isWaiting && currentStep === 'payment' && (
                            <>
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                    <div className="p-6 sm:p-8">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                            <FaQrcode className="text-indigo-500" />
                                            Pay via UPI
                                        </h2>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-mono text-sm sm:text-base break-all">
                                                            {paymentInfo?.upiId || 'N/A'}
                                                        </div>
                                                        <button
                                                            onClick={handleCopy}
                                                            disabled={!paymentInfo?.upiId}
                                                            className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative group flex-shrink-0"
                                                            title="Copy UPI ID"
                                                        >
                                                            {copySuccess ? (
                                                                <FaCheck className="w-5 h-5 text-green-600" />
                                                            ) : (
                                                                <BiCopy className="w-5 h-5 text-indigo-600" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    {copySuccess && <p className="text-sm text-green-600 mt-2 animate-pulse">✓ Copied!</p>}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    Open your UPI app and send payment to this UPI ID.
                                                </p>
                                                {paymentInfo?.accountName && paymentInfo?.bankName && (
                                                    <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                                                        <span className="font-medium">Beneficiary:</span> {paymentInfo.accountName} (
                                                        {paymentInfo.bankName})
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                                                    {paymentInfo?.qrImageUrl ? (
                                                        <img
                                                            src={paymentInfo.qrImageUrl}
                                                            alt="UPI QR Code"
                                                            className="w-48 h-48 object-contain rounded-xl"
                                                        />
                                                    ) : (
                                                        <div className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center shadow-inner">
                                                            <span className="text-gray-500 font-medium">QR Code</span>
                                                        </div>
                                                    )}
                                                    <p className="text-sm text-gray-600 text-center mt-4">Scan with any UPI app</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                    <div className="p-6 sm:p-8">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <FiHelpCircle className="w-5 h-5 text-indigo-500" />
                                            How to pay
                                        </h2>
                                        <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm sm:text-base">
                                            <li>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                                            <li>
                                                Scan the QR code or send payment to{' '}
                                                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm break-all">
                                                    {paymentInfo?.upiId || 'N/A'}
                                                </span>
                                            </li>
                                            <li>Complete the payment and copy the UTR / Transaction ID from your app</li>
                                            <li>Enter the UTR below and submit for verification</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                    <div className="p-6 sm:p-8">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Submit Payment Details</h2>
                                        {submitted ? (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <FaCheck className="w-10 h-10 text-green-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    Payment Submitted Successfully
                                                </h3>
                                                <p className="text-gray-600 mb-4 break-all">
                                                    Your UTR <span className="font-mono bg-white px-2 py-1 rounded">{utr}</span> has been
                                                    received.
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    We'll verify your payment within a few minutes. You'll receive a confirmation once done.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div>
                                                    <label htmlFor="utr" className="block text-sm font-medium text-gray-700 mb-2">
                                                        UTR / Transaction ID <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="utr"
                                                        value={utr}
                                                        onChange={(e) => setUtr(e.target.value)}
                                                        required
                                                        placeholder="e.g. UPI123456789012"
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                                                        Payment Screenshot (optional)
                                                    </label>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label
                                                            htmlFor="screenshot"
                                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition group"
                                                        >
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <FaUpload className="w-8 h-8 text-gray-400 group-hover:text-indigo-500 mb-2 transition" />
                                                                <p className="text-sm text-gray-500">
                                                                    <span className="font-semibold text-indigo-600">Click to upload</span> or drag and
                                                                    drop
                                                                </p>
                                                                <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                                                            </div>
                                                            <input
                                                                id="screenshot"
                                                                type="file"
                                                                accept="image/*"
                                                                className="hidden"
                                                                onChange={handleScreenshotChange}
                                                            />
                                                        </label>
                                                    </div>
                                                    {screenshot && (
                                                        <p className="text-sm text-gray-600 mt-2 flex items-center gap-1 break-all">
                                                            <FaCheck className="text-green-500 flex-shrink-0" /> Selected: {screenshot.name}
                                                        </p>
                                                    )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={!utr || submitting}
                                                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                                                >
                                                    {submitting ? (
                                                        <>
                                                            <FaSpinner className="animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        'Submit Payment'
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}

                {/* PAYMENT STATUS CARD */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Status</h2>
                        <div
                            className={`rounded-xl p-6 ${isPendingVerification
                                ? 'bg-blue-50 border border-blue-200'
                                : isWaiting
                                    ? 'bg-amber-50 border border-amber-200'
                                    : isPaid
                                        ? 'bg-green-50 border border-green-200'
                                        : isFailed
                                            ? 'bg-red-50 border border-red-200'
                                            : 'bg-gray-50 border border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isPendingVerification
                                        ? 'bg-blue-200 text-blue-800'
                                        : isWaiting
                                            ? 'bg-amber-200 text-amber-800'
                                            : isPaid
                                                ? 'bg-green-200 text-green-800'
                                                : isFailed
                                                    ? 'bg-red-200 text-red-800'
                                                    : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {isPendingVerification
                                        ? 'Under Verification'
                                        : isWaiting
                                            ? 'Pending Payment'
                                            : isPaid
                                                ? 'Payment Completed'
                                                : isFailed
                                                    ? 'Payment Failed'
                                                    : 'Unknown'}
                                </span>
                                {isPaid && ordersData.payment.utr && (
                                    <span className="text-sm text-gray-600 break-all">UTR: {ordersData.payment.utr}</span>
                                )}
                                {isPendingVerification && ordersData.payment.utr && (
                                    <span className="text-sm text-gray-600 break-all">UTR: {ordersData.payment.utr}</span>
                                )}
                            </div>
                            <p className="text-gray-700">
                                {isPendingVerification
                                    ? 'Your payment is being verified. You will receive a confirmation once the verification is complete.'
                                    : isWaiting
                                        ? 'Please complete the payment using the options above.'
                                        : isPaid
                                            ? 'Your payment has been successfully verified. Thank you for your purchase!'
                                            : isFailed
                                                ? 'There was an issue with your payment. Please contact support.'
                                                : 'No payment information available.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* SUPPORT SECTION */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6 sm:p-8">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaHeadset className="text-indigo-500" />
                            Need Help?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                                    <span className="font-medium">WhatsApp</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">+91 98765 43210</p>
                                <button className="text-indigo-600 text-sm font-medium hover:underline">
                                    Chat now
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium">Email</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">support@wishbox.com</p>
                                <button className="text-indigo-600 text-sm font-medium hover:underline">
                                    Send email
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaPhoneAlt className="w-5 h-5 text-purple-600" />
                                    <span className="font-medium">Phone</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">Mon-Sat, 9AM-6PM</p>
                                <button className="text-indigo-600 text-sm font-medium hover:underline">
                                    Call now
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <FiHelpCircle className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium">FAQs</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">Find quick answers</p>
                                <button className="text-indigo-600 text-sm font-medium hover:underline">
                                    Visit help center
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            If you've already paid but forgot to submit UTR, you can still use the form above.
                        </p>
                    </div>
                </div>

                {/* CANCEL ORDER MODAL */}
                {cancelModalOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Cancel Order</h3>
                                <button
                                    onClick={() => setCancelModalOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                    <IoMdClose className="w-6 h-6" />
                                </button>
                            </div>
                            {cancelSuccess ? (
                                <div className="text-center py-4">
                                    <FaCheck className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                    <p className="text-gray-700">Your order has been cancelled successfully.</p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-600 mb-6">
                                        Are you sure you want to cancel this order? This action cannot be undone.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleCancelOrder}
                                            disabled={cancelling}
                                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {cancelling ? (
                                                <>
                                                    <FaSpinner className="animate-spin" />
                                                    Cancelling...
                                                </>
                                            ) : (
                                                'Yes, Cancel Order'
                                            )}
                                        </button>
                                        <button
                                            onClick={() => setCancelModalOpen(false)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                                        >
                                            No, Keep it
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentPage;