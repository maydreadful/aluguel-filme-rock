import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex gap-8 px-6 py-12 text-2xl">
            <NavLink className="" to="/">
                Home
            </NavLink>
            <NavLink className="" to="/sobre"> {/* Alterado para /sobre */}
                Sobre
            </NavLink>
            <NavLink className="" to="/filmes"> {/* Alterado para /filmes */}
                Filmes
            </NavLink>
            <NavLink className="" to="/contato"> {/* Alterado para /contato */}
                Contato
            </NavLink>
        </header>
    );
}

export default Header; // Exportação adicionada