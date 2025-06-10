const Home = () => {
  return(
      <>
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('banner.png')" }}>
          {/* Conteúdo para sua página inicial, por exemplo, uma seção de herói, filmes em destaque */}
          <h1 className="text-white text-6xl text-center pt-48">Bem-vindo ao Rock Film Rentals</h1>
        </div>
      </>
  );
}

export default Home