import { useEffect, useState } from "react"

function Conteudo({ api }) {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        fetch('./jogos.json')
            .then(res => res.json())
            .then(dados => setJogos(dados));



    }

    )

    return (
        <>
            {jogos.map((jogo) => (
                <div className='bg-[#d3d3d3] w-3/5 h-auto mx-auto shadow-md rounded-lg m-9 p-4 '>
                    <h1>{jogo.nome}</h1>
                    <div className="grid grid-cols-1 grid-rows-3">
                        <span>Desenvolvedor: {jogo.desenvolvedor}</span>
                        <span>Genero: {jogo.genero}</span>
                        <span>Plataformas: {jogo.plataformas}</span>
                    </div>
                </div >


            ))}
        </>
    )
}

export default Conteudo