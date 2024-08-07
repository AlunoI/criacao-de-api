import { useEffect, useState } from "react"

function Conteudo2({ api }) {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        fetch('./jogos.json')
            .then(res => res.json())
            .then(dados => setJogos(dados));
    })

    const filter = jogos.filter(jogo => jogo.genero.includes("Aventura"))

    console.log(filter)

    filter.map(jogo => {
        console.log(jogo.nome)
    })

    return (
        <div>
            {filter.map(jogo => (
                <div>
                    <div className='bg-[#d3d3d3] w-3/5 h-auto mx-auto shadow-md rounded-lg m-9 p-4 '>
                        <h1>{jogo.nome}</h1>
                        <div className="grid grid-cols-1 grid-rows-3">
                            <span>Desenvolvedor: {jogo.desenvolvedor}</span>
                            <span>Genero: {jogo.genero}</span>
                            <span>Plataformas: {jogo.plataformas}</span>
                        </div>
                    </div >
                </div>
            ))}
        </div>
    )
}

export default Conteudo2