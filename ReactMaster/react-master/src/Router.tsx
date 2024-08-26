import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import Root from "./Root";
import About from "./Screens/About";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";
import Followers from "./Screens/users/Followers";
import User from "./Screens/users/User";
// function Router(){
//     return <BrowserRouter>
//         <Header />
//         <Routes>
//             <Route path="/" element={<Home />}/>
//             <Route path="/about" element={<About />}/>
//         </Routes>
//     </BrowserRouter>
// }

const router = createBrowserRouter([
    {
        path: "/", // path : 부모, about/home : 자식
        element: <Root/>,
        children: [
            {
                path: "about",
                element: <About/>
            },
            {
                path: "",
                element: <Home/>,
                errorElement: <ErrorComponent />
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers/>
                    },
                    // {
                    //     path: "following",
                    //     element: <Followers/>
                    // }
                ]
            },
            
        ],
        errorElement: <NotFound/>,
    }
])
export default router;