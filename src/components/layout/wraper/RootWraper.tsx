import { ToastContainer } from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import LottieAnimation from "../../ui/animation/LootiAnimation";
import AnimationCon from "../../../consts/animations/AnimationCon";
import { useSelector } from "react-redux";
import MainHeader from "../main/header/MainHeader";
import { useLocation } from "react-router-dom";
import routePath from "../../../consts/routes/routePath";

function RootWraper({ children }: any) {
    const loading = useSelector((state: any) => state.loader.mainLoader);
    const location = useLocation().pathname
    return (
        <div className="flex-1">
            <ToastContainer />
            {
                loading ?? <Modal
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
                        }}
                    >
                        <LottieAnimation
                            animationData={AnimationCon.LOADINGANI}
                            width={250}
                            height={250}
                        />
                    </Box>
                </Modal>
            }
            <div className="flex-1 px-6 pt-4 relative ">
                {
                    location === routePath.PRIVATE_ROUTE.DASHBOARD_PAGE || routePath.PRIVATE_ROUTE.SHOP_PAGE || routePath.PRIVATE_ROUTE.ABOUT_PAGE || routePath.PRIVATE_ROUTE.SUPPORT_PAGE || routePath.PRIVATE_ROUTE.SHOP_PAGE || routePath.PRIVATE_ROUTE.WISHLIST_PAGE || routePath.PRIVATE_ROUTE.CART_PAGE || routePath.PRIVATE_ROUTE.PROFILE_PAGE ? <MainHeader /> : null
                }
                {children}
            </div>
        </div>
    );
}

export default RootWraper;
