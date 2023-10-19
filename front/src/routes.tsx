import {Routes, Route} from "react-router-dom";
import { LoginPage } from "./components/Page/LoginPage";

const Router = () =>{
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
        </Routes>
    )
}
    export default Router