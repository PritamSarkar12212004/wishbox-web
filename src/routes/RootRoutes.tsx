import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoutes";
import DashboardPage from "../page/main/DashboardPage";
import SupportPage from "../page/main/SupportPage";
import routePath from "../consts/routes/routePath";
import AboutPage from "../page/main/AboutPage";
import ShopPage from "../page/main/ShopPage";
import CartPage from "../page/main/CartPage";
import WishlistPage from "../page/main/WishlistPage";
import ProductCollectionPage from "../page/main/products/ProductCollectionPage";
import ShowProduct from "../page/main/products/ShowProduct";
import GaleryPagee from "../page/main/GaleryPagee";
import CollectionListPage from "../page/main/CollectionListPage";
function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<PrivateRoute />}>
                    <Route path={routePath.PRIVATE_ROUTE.DASHBOARD_PAGE} element={<DashboardPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.SUPPORT_PAGE} element={<SupportPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.ABOUT_PAGE} element={<AboutPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.SHOP_PAGE} element={<ShopPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.CART_PAGE
                    } element={<CartPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.WISHLIST_PAGE
                    } element={<WishlistPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.COLLECTION_PAGE
                    } element={<ProductCollectionPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.SHOW_PRODUCT_PAGE
                    } element={<ShowProduct />} />
                    <Route path={routePath.PRIVATE_ROUTE.SHOW_PRODUCT_list_PAGE
                    } element={<CollectionListPage />} />
                    <Route path={routePath.PRIVATE_ROUTE.COLLECTIONIMG_PAGE
                    } element={<GaleryPagee />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
