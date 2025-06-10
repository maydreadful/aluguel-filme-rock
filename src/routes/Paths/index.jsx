import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre"; // Importar página Sobre
import Filmes from "../../pages/Filmes"; // Importar página Filmes
import Contato from "../../pages/Contato"; // Importar página Contato
import NotFound from "../../pages/NotFound";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} /> {/* Nova rota */}
                    <Route path="filmes" element={<Filmes />} /> {/* Nova rota */}
                    <Route path="contato" element={<Contato />} /> {/* Nova rota */}
                </Route>
                <Route path="*" element={<NotFound />} /> {/* Usar * para rota curinga */}
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;