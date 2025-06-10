const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400"> {/* Adicionado um estilo básico */}
            <p>&copy; {new Date().getFullYear()} Rock Film Rentals. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;