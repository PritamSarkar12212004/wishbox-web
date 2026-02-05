import { Navigate, Outlet } from "react-router-dom";
import readData from "../functions/storage/readData";
import storageToken from "../consts/token/storage/storageToken";

function PrivateRoute() {
    const auth = true;
    // const auth = readData({ key: storageToken.AUTH.USER_LOGIN_STATE });

    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
