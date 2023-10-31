import {Routes, Route} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/registerPage";
import { Home } from "../pages/Home";

const Router = () =>{
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}
    export default Router