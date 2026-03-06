const apiPath = {
  DASHBOARD: {
    FETCH_DASHBOARD_DATA: "/dashboard/fetch_Dashboard_data",
  },
  GALLERY: {
    FETCH_GALLERY_DATA: "/gallery/fetch_Gallery_data",
  },
  PRODUCT: {
    FETCH_PRODUCT_IMAGE: "/product/fetch_product_image",
    FETCH_FULL_PRODUCT: "/product/fetch_full_products",
  },
  CART: {
    ADD_TO_CART: "/product/product_add_cart",
    FETCH_ID_CART: "/product/product_fetch_id_cart",
    FETCH_FULL_CART: "/product/product_fetch_full_cart",
    REMOVE_SINGLE_ITEM_CART: "/product/product_remove_single_cart",
  },
  WATCHLIST: {
    ADD_WATCHLIST: "/product/product_add_watch_list",
    FETCH_WATCHLIST: "/product/product_fetch_watch_list",
    FETCH_WATCHLIST_FULL_DATA: "/product/product_fetch_full_watch_list",
  },
  AUTH: {
    CALL_OTP: "/auth/call_otp",
  },
};
export default apiPath;
