import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { CreateProfileOwner } from "./pages/createProfileOwner";
import { CreateProfileWalker } from "./pages/createProfileWalker";
import { OwnerProfile } from "./pages/OwnerProfile";
//import { Profilewalker } from "./pages/profileWalker";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardWalkers } from "./component/cardWalkers";
import { Carousel } from "./component/carousel";
import { Jumbotron } from "./component/Jumbotron";
import { CardOwners } from "./component/cardOwners";
import { Comments } from "./component/comments";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />

                    <Jumbotron />
                    <Carousel />
                    <div className="cards justify-content-around d-flex mb-5 max">
                        <div className="d-flex">
                            <CardWalkers />
                            <CardWalkers />
                        </div>

                        <div className="d-flex">
                            <CardOwners />
                            <CardOwners />
                        </div>
                    </div>
                    <Comments />

                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<CreateProfileOwner />} path="/createProfileOwner" />
                        <Route element={<CreateProfileWalker />} path="/createProfileWalker" />
                        {/* <Route element={<Profilewalker/>} path="/createProfileWalker" /> */}
                        <Route element={<OwnerProfile />} path="/ownerProfile" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
