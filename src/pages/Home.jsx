import GameCard from "../components/GameCard"
import ImagemJogo from "../assets/imagem.jpg"

const Home = () => {

    const gamer = [
        { id: 1, titulo: "jogo-01", preco: "R$ 200,00", imagem: ImagemJogo },
        { id: 2, titulo: "jogo-02", preco: "R$ 300,00", imagem: ImagemJogo },
        { id: 3, titulo: "jogo-03", preco: "R$ 400,00", imagem: ImagemJogo },
        { id: 4, titulo: "jogo-04", preco: "R$ 500,00", imagem: ImagemJogo },
        { id: 5, titulo: "jogo-05", preco: "R$ 600,00", imagem: ImagemJogo },
    ]

    return (
        <main className="px-[5%] mt-10 mb-16 grow">
            <h2 className="titulo text-3xl">Jogos em Destaque</h2>

            {/* É aqui que os cards ficam um do lado do outro */}
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-6">
                {gamer.map((jogo) => (
                    <GameCard
                        key={jogo.id}
                        titulo={jogo.titulo}
                        preco={jogo.preco}
                        imagem={jogo.imagem}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home