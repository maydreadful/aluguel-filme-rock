import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex gap-8 px-6 py-12 text-2xl">
            <Navlink className="" to="/">
            Home
</Navlink>

<Navlink className="" to="/">
            Sobre
</Navlink>
      
      <Navlink className="" to="/">
            Filmes
</Navlink>

<Navlink className="" to="/">
            Contato
</Navlink>
        </header>
    );
}