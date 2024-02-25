
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import {NotFound} from "../pages/NotFound/NotFound.jsx";

import {Nav} from '../components/nav/Nav'
import {Footer} from '../components/footer/Footer'

export const Router = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}