const apiPath = {
  DASHBOARD: {
    FETCH_DASHBOARD_DATA: "/dashboard/fetch_Dashboard_data",
  },
  GALLERY: {
    FETCH_GALLERY_DATA: "/gallery/fetch_Gallery_data",
  },
  PAYMENT_INFO: {
    FETCH_PAYMENT_INFO_ADMIN: "/payment/fetch_admin_payment_info",
    PAYMENT_SUBMIT: "/payment/submit_payment",
  },
  CONTACT: {
    FULL_CONTACT: "/contact/full_contact",
  },
  PRODUCT: {
    FETCH_PRODUCT_IMAGE: "/product/fetch_product_image",
    FETCH_FULL_PRODUCT: "/product/fetch_full_products",
  },
  COLLECTION: {
    FETCH_FULL_COLLECTION: "/product/fetch_full_collection",
  },
  CART: {
    ADD_TO_CART: "/product/product_add_cart",
    FETCH_ID_CART: "/product/product_fetch_id_cart",
    FETCH_FULL_CART: "/product/product_fetch_full_cart",
    REMOVE_SINGLE_ITEM_CART: "/product/product_remove_single_cart",
    FAAINAL_UPDATE_CART_WITH_PLACE_ORDER:
      "/product/product_cart_fainal_update_order_place",
  },
  WATCHLIST: {
    ADD_WATCHLIST: "/product/product_add_watch_list",
    FETCH_WATCHLIST: "/product/product_fetch_watch_list",
    FETCH_WATCHLIST_FULL_DATA: "/product/product_fetch_full_watch_list",
  },
  AUTH: {
    CALL_OTP: "/auth/call_otp",
  },
  ORDER: {
    FETCH_FULL_ORDER: "/order/fetch_order_detiles",
    CANCEL_ORDER: "/order/cancel_order",
  },
  SHIPROCKET: {
    AUTH_TOKEN: "https://apiv2.shiprocket.in/v1/external/auth/login",
    CHECK_COURIER:
      "https://apiv2.shiprocket.in/v1/external/courier/serviceability",
    CHECK_ADDRESS: "https://api.postalpincode.in/pincode/",
  },
};
export default apiPath;
