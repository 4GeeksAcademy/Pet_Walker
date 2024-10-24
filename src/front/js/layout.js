import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { CreateProfileOwner } from "./pages/createProfileOwner";
import { CreateProfileWalker } from "./pages/createProfileWalker";
import { OwnerProfile } from "./pages/profileOwner";
import { Registration } from "./pages/registration";
import { ProfileWalker } from "./pages/profileWalker";
import injectContext from "./store/appContext";
import { Login } from "./component/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardWalkers } from "./component/cardWalkers";
import { Carousel } from "./component/carousel";
import { Jumbotron } from "./component/Jumbotron";
import { CardOwners } from "./component/cardOwners";
import { Comments } from "./component/comments";
import { NewRide } from "./component/NewRide";
import { SearchWalker } from "./pages/searchWalker";

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

                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<CreateProfileOwner />} path="/createProfileOwner" />
                        <Route element={<CreateProfileWalker />} path="/createProfileWalker" />
<<<<<<< HEAD
                        <Route element={<NewRide />} path="/Newride/:walkerid" />
                        {/* 
                        if store.profile == owner ---->   <Route element={<OwnerProfile />} path="/profile-owner" />
                        if store.profile == walker --->   <Route element={<ProfileWalker />} path="/profile-walker" />
*/}
=======
                        <Route element={<NewRide />} path="/Newride" />
>>>>>>> 0fb1c2e5ec1e351b33f840d492a32d59f264ca8b
                        <Route element={<OwnerProfile />} path="/profile-owner" />
                        <Route element={<ProfileWalker />} path="/profile-walker" />
                        <Route element={<Registration />} path="/registration" />
                       
                        <Route element={<Login />} path="/login" />
                        <Route element={<SearchWalker />} path="/search-walker" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
