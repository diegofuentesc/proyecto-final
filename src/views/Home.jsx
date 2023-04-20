import Banner from "../components/Banner"
import Galeria from "../components/Galeria"




const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <h2 className="tituloGaleria">ULTIMAS PUBLICACIONES</h2>
        <Galeria></Galeria>
      
    </div>
  )
}

export default Home