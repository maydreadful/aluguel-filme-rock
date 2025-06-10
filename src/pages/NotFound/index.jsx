import imageNotFound from '/public/glitch-error-404-page-background_23-2148072534.avif' // Alterado para uma imagem placeholder do vite por enquanto

const NotFound = () => {
    return (
        <div className='h-screen w-full flex items-center px-24'>
            <div>
                <img
                    src={imageNotFound}
                    alt="imagem com erro 404"
                    className='w-1/2'
                />
            </div>
            <div className=''>
                <h1 className='font-black text-5xl'>404</h1>
                <p className='text-xl'>Página Não Encontrada</p> {/* Adicionada uma mensagem */}
            </div>
        </div>
    );
}

export default NotFound;