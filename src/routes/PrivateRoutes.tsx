import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
    const auth = true;
    // const auth = readData({ key: storageToken.AUTH.USER_LOGIN_STATE });

    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
