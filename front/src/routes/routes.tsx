import {Routes, Route} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/registerPage";

const Router = () =>{
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage/>}/>
        </Routes>
    )
}
    export default Router