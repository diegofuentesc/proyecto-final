import { useContext} from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from './components/Barra.jsx'
import Home from './views/Home.jsx';
import Registrar from './views/Registrar.jsx';
import Ingresar from './views/Ingresar.jsx'
import Detalle  from './views/Detalle.jsx';
import  ContextoGlobal from "./contexts/ContextoGlobal";
import Publicaciones from "./views/Publicaciones";
import HomePrivado from "./views/HomePrivado";
import Error from "./views/Error";
import Publicar from "./views/Publicar";
import MisPublicaciones from "./views/MisPublicaciones";
import MisFavoritos from "./views/MisFavoritos";
import Perfil from './views/Perfil';
import Nuevo from './views/Nuevo';
import Usado from './views/Usado';
import EditarPublicacion from './views/EditarPublicacion';
import Footer from './components/Footer';


function App() { 
  const {  usuario } = useContext(ContextoGlobal);


  return (
    
      <BrowserRouter>
       <Barra></Barra>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/registrar' element={<Registrar></Registrar>}></Route>
            <Route path='/ingresar' element={<Ingresar></Ingresar>}></Route>
            <Route path='/nuevos' element={<Nuevo></Nuevo>}></Route>
            <Route path='/usados' element={<Usado></Usado>}></Route>
            {usuario.conectado && 
            <>
             <Route path='/homeprivado' element={<HomePrivado></HomePrivado>}></Route>
             <Route path='/publicar' element={<Publicar></Publicar>}></Route>
             <Route path='/mispublicaciones' element={<MisPublicaciones></MisPublicaciones>}></Route>
             <Route path='/misfavoritos' element={<MisFavoritos></MisFavoritos>}></Route>
             <Route path='/miperfil' element={<Perfil></Perfil>}></Route>
             <Route path='/editarPublicacion/:id' element={<EditarPublicacion></EditarPublicacion>}></Route>
            </>
           }
            <Route path='*' element={<Error></Error>}></Route>
            <Route path='/publicaciones' element={<Publicaciones></Publicaciones>}></Route>
            <Route path='/detalle/:id' element={<Detalle></Detalle>}></Route>
         </Routes>

        
         
      </BrowserRouter>
    
     
   
  );
}

export default App;
