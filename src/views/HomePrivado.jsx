import React from 'react'
import Galeria from '../components/Galeria'
import Combustibles from '../components/Combustibles'
import Banner from '../components/Banner'
import ContextoGlobal from '../contexts/ContextoGlobal'
import { useContext } from 'react'

const HomePrivado = () => {

  const { usuario } = useContext(ContextoGlobal);

  return (
    <div>
        <Banner></Banner>
        <h2 className="tituloGaleria">Bienvenido {usuario.nombre} {usuario.apellido} </h2>
        <Galeria></Galeria>
        <Combustibles></Combustibles>
    </div>
  )
}

export default HomePrivado
