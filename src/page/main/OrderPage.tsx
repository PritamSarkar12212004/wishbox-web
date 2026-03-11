import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ArchiveBoxIcon,
  CreditCardIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import ApiCallFetchOrder from "../../api/order/ApiCallFetchOrder";
import routePath from "../../consts/routes/routePath";

// Helper to format currency
const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);

// Status badge with matching icon and colour
const statusConfig: Record<string, { color: string; icon: React.ElementType }> = {
  payment_pending: {
    color: "bg-amber-100 text-amber-700 border-amber-200",
    icon: CreditCardIcon,
  },
  order_placed: {
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: ArchiveBoxIcon,
  },
  delivered: {
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: ArchiveBoxIcon,
  },
  cancelled: {
    color: "bg-rose-100 text-rose-700 border-rose-200",
    icon: ArchiveBoxIcon,
  },
};

const getStatusConfig = (status: string) =>
  statusConfig[status] || {
    color: "bg-gray-100 text-gray-700 border-gray-200",
    icon: ArchiveBoxIcon,
  };

// Skeleton loader for cards
const OrderCardSkeleton = () => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="flex justify-between">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-5 bg-gray-200 rounded w-20" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
      <div className="h-6 bg-gray-200 rounded w-1/3" />
    </div>
  </div>
);

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = useSelector((state: any) => state.userDataSlice.mainUserID);
  const orderData = useSelector((state: any) => state.orderSlice?.orderFullData);
  const loading = useSelector((state: any) => state.orderSlice?.loading);

  useEffect(() => {
    if (userID) {
      ApiCallFetchOrder({ dispatch, userID });
    }
  }, [dispatch, userID]);

  const handleCardClick = (order: any) => {
    navigate(routePath.PRIVATE_ROUTE.PAYMENT_PAGE, {
      state: {
        fullData: true,
        item: order
      }
    })
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <OrderCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  // No orders state
  if (!orderData || orderData.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="bg-gray-50 rounded-3xl p-12 max-w-md mx-auto">
          <ShoppingBagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No orders yet
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't placed any orders. Start shopping to see them here.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Browse Products
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header with optional filter (could be extended) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
          {orderData.length} {orderData.length === 1 ? "order" : "orders"}
        </p>
      </div>

      {/* Order grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orderData.map((order: any) => {
          const firstItem = order.items?.[0];
          const itemCount = order.items?.length || 0;
          const orderDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          const StatusIcon = getStatusConfig(order.orderStatus).icon;

          return (
            <div
              key={order._id}
              onClick={() => handleCardClick(order)}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Image container with overlay on hover */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {firstItem?.image ? (
                  <img
                    src={firstItem.image}
                    alt={firstItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <ArchiveBoxIcon className="w-12 h-12" />
                  </div>
                )}
                {/* Status badge positioned on image */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusConfig(
                      order.orderStatus
                    ).color}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {order.orderStatus.replaceAll("_", " ")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Order ID and date */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-mono text-sm font-medium text-gray-500">
                    #{order.orderId}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <CalendarIcon className="w-3 h-3 mr-1" />
                    {orderDate}
                  </div>
                </div>

                {/* Product title / items summary */}
                <p className="text-gray-800 font-semibold text-lg mb-1 line-clamp-1">
                  {firstItem?.title || "Order items"}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </p>

                {/* Price and payment info */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Total amount</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatCurrency(order.totalAmount)}
                    </p>
                  </div>
                  {order.payment && (
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Payment</p>
                      <p className="text-sm font-medium text-gray-700">
                        {order.payment.paymentType.toUpperCase()}
                      </p>
                    </div>
                  )}
                </div>

                {/* View details hint */}
                <div className="mt-4 flex justify-end items-center text-blue-600 text-sm font-medium">
                  View details
                  <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderPage;