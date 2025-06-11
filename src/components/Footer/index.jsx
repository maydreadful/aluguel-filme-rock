const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400"> {/* Adicionado um estilo básico */}
            <p>&copy; {new Date().getFullYear()} Rock Films</p>
        </footer>
    );
}

export default Footer;