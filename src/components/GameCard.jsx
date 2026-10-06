// DESTRUCTING

const GameCard = () => {
  return (
    <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#95ff00]">
      <img src={image} alt= {titulo} className="w-full h-[260px] object-cover"/>

      <article className="p-4 text-center">
          <h2 className="text-xl text-[#85ff00] uppercase mb-3 font-bold">{titulo}</h2>

          <p className="text-white text-2x1 font-bold mb-4">{preco}</p>
          <button className="bg-gradient-to-r from-cyan-400 to-purple-600 w-[50%] py-4 px-4 rounded-2xl border-4 cursor-pointer font-semibold transition-all duration-300h
           text-white hover:scale-105"></button>
      </article>
    </div>
  )
}

export default GameCard
