import { Navigate, Outlet } from "react-router-dom";
import readData from "../functions/storage/readData";
import storageToken from "../consts/token/storage/storageToken";

function PublicRoute() {

    const auth = readData({
        key: storageToken.AUTH.USER_LOGIN_STATE,
    });

    return auth ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default PublicRoute;
