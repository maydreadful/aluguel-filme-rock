import { NavLink } from "react-router-dom";

const NavMenu = () => {

    const menu = [
        {
            id: 1,
            name: 'Home',
            page: '/'
        },
        {
            id: 2,
            name: 'Sobre',
            page: '/sobre'
        },
        {
            id: 3,
            name: 'Filmes',
            page: '/filmes'
        },
        {
            id: 4,
            name: 'Contato',
            page: '/contato'
        }
    ]

    return (
        <div className="flex gap-8 text-2xl">
            {menu.map(link =>
                <NavLink key={link.id} to={link.page} className="[&.active]:font-bold [&.active]:text-(--primary-color) hover:drop-shadow-[0_0_20px_var(--primary-color)] duration-150" >
                    {link.name}
                </NavLink>
            )}
        </div>
    );
}

export default NavMenu;