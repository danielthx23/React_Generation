import React, { useEffect, useState } from 'react'

interface myProps {
    titulo: string,
    texto: string
}

function Home(props: myProps) {

    const [contador, setContador] = useState(1)
    const [logado, setLogado] = useState(false)

    function somar() {
        setContador(contador + 1)
    }

    useEffect(() => {
        alert('para de somar')
    }, [contador >= 5])

    return (
        <>
            {logado ? <h1>Bem-vindo</h1> : <button onClick={() => {setLogado(true)}}>Logar</button>}
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
            <img src="https://laparola.com.br/wp-content/uploads/2015/03/teletubbies-preto-e-branco.jpg" alt="Tela legal" />
            <h1>{contador}</h1>
            <button className='text-3xl font-mono border-2 border-black p-4 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 to-violet-500 text-white' onClick={somar}>adicionar mais um</button>
        </>
    )
}

export default Home