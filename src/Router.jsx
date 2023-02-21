import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./screens/Detail";
import Header from "./screens/Header";
import Home from "./screens/Home";
import Work from "./screens/Work";
import Works from "./screens/Works";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/work/add"} element={<Work />} />
                <Route path={"/works"} element={<Works />} />
                <Route path={"/works:id"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;