import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 루트 경로에서 Coins 컴포넌트를 렌더링 */}
                <Route path="/" element={<Coins />} />
                
                {/* 동적 경로 매개변수 coinID를 사용하여 Coin 컴포넌트를 렌더링 */}
                <Route path="/:coinId" element={<Coin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
