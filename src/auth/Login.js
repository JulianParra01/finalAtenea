import { User, useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';
import '../style/Login.css'
const Login = () => {

    const {loginWithRedirect, isAuthenticated, user, isLoading} = useAuth0();
    const dispatch = useDispatch();
    const handleLogin = async() => {
            try {
                await loginWithRedirect();
            } catch (error) {
                console.log(error);
            }
    };
    useEffect(() => {
    if(isAuthenticated && user ){
        dispatch(login(user))};
}, [isAuthenticated, user, dispatch]);

if (isLoading){
    <div> Cargando ...</div>
}
    return (
        <div className="containerlogin">
            <div className="cartalogin">
            <h1>BIENVENIDO</h1>
            <p>Para consultar la web debes iniciar sesion</p>
    <button type="button" class="btn btn-success" onClick={handleLogin}>Iniciar</button>
    </div>
    </div>
    )
};

export default Login;