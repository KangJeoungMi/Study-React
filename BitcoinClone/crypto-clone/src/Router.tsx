import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";

function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Coins/>
            </Route>
        </Routes>
    </BrowserRouter>
}
export default Router;