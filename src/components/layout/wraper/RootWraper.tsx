import { ToastContainer } from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LottieAnimation from "../../ui/animation/LootiAnimation";
import AnimationCon from "../../../consts/animations/AnimationCon";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "../main/header/MainHeader";
// import { useLocation } from "react-router-dom";
// import routePath from "../../../consts/routes/routePath";
import { useEffect, useState } from "react";
import checkLogin from "../../../functions/auth/checkLogin";
import LoginPage from "../../../page/auth/LoginPage";
import readData from "../../../functions/storage/readData";
import storageToken from "../../../consts/token/storage/storageToken";
import { userMainpDataSet } from "../../../services/store/slice/user/userDataSlice";

function RootWraper({ children }: any) {
    const loading = useSelector((state: any) => state.loader.mainLoader);
    // const location = useLocation().pathname;
    // const privateRoutes = [
    //     routePath.PRIVATE_ROUTE.DASHBOARD_PAGE,
    //     routePath.PRIVATE_ROUTE.SHOP_PAGE,
    //     routePath.PRIVATE_ROUTE.ABOUT_PAGE,
    //     routePath.PRIVATE_ROUTE.SUPPORT_PAGE,
    //     routePath.PRIVATE_ROUTE.WISHLIST_PAGE,
    //     routePath.PRIVATE_ROUTE.CART_PAGE,
    //     routePath.PRIVATE_ROUTE.PROFILE_PAGE
    // ];
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
        const verifyAuth = async () => {
            const loginState = await checkLogin();
            const userAuth = await readData({
                key: storageToken.USER_INFO.USER_ID_INFO
            });
            if (loginState && userAuth) {
                dispatch(userMainpDataSet(userAuth))
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        };
        verifyAuth();

    }, []);

    if (!isAuth) {
        return <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="text-sm md:text-base"
            />
            {loading && (
                <Modal
                    open={true}
                    aria-labelledby="loading-modal"
                    aria-describedby="loading-modal-desc"
                >
                    <Box
                        sx={{
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            backdropFilter: "blur(2px)"
                        }}
                    >
                        <div className="scale-75 sm:scale-90 md:scale-100">
                            <LottieAnimation
                                animationData={AnimationCon.LOADINGANI}
                                width={250}
                                height={250}
                            />
                        </div>
                    </Box>
                </Modal>
            )}
            <LoginPage />;
        </>
    }
    else {
        return <div className="flex-1">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="text-sm md:text-base"
            />
            {loading && (
                <Modal
                    open={true}
                    aria-labelledby="loading-modal"
                    aria-describedby="loading-modal-desc"
                >
                    <Box
                        sx={{
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            backdropFilter: "blur(2px)"
                        }}
                    >
                        <div className="scale-75 sm:scale-90 md:scale-100">
                            <LottieAnimation
                                animationData={AnimationCon.LOADINGANI}
                                width={250}
                                height={250}
                            />
                        </div>
                    </Box>
                </Modal>
            )}
            <div className="flex-1 px-2 sm:px-3 md:px-4 pt-3 md:pt-4 relative">
                {<MainHeader />}
                <div className="mt-2 md:mt-0">
                    {children}
                </div>
            </div>
        </div>
    }



}

export default RootWraper;