import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Home from "../../pages/Home";
import About from "../../pages/Sobre"
import NotFound from "../../pages/NotFound";
import Account from "../../pages/Account";
import Filmes from "../../pages/Filmes";
import Contato from "../../pages/Contato";
import Banner from "../../components/Banner";


const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/filmes" element={<Filmes />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/banner" element={<Banner />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;