import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { AboutDog } from "./aboutDog";
import injectContext from "./appContext";
import { Footer } from "./footer";
import { Main } from "./main";
import { Navbar } from "./navbar";
import ScrollToTop from "./scrollToTop";
import { Socials } from "./social";



const Layout =() => {

    const basename = process.env.BASENAME || "";

return(
<div>

<BrowserRouter basename={basename}>
<ScrollToTop>
    <Navbar/>
    <Routes>
    
    
        <Route exact path="/" element={<Main/>}/>

        <Route exact path="/socials" element={<Socials/>}/>
        <Route exact path="/goldendoodle" element={<AboutDog/>}/>
            



    


        </Routes>
        <Footer/>
</ScrollToTop>
</BrowserRouter>

</div>
);


};

export default injectContext(Layout);