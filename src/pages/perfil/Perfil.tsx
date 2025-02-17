import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'
function Perfil() {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
            <img className='w-full h-72 object-cover border-b-8 border-white' src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTEzOTQ5NDM0Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==' alt="Capa do Perfil" />
            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
            <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
    )
}

export default Perfil