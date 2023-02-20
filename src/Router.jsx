import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/Header";
import Home from "./screens/Home";
import Works from "./screens/Works";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/works"} element={<Works />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;