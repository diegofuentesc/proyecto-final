import { createContext } from "react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export const ContextoGlobal =  createContext();

export const ContextoGlobalProvider = (props) => {
  
  //const [userLogueado, setUserLogueado] = useState(false)
  const [autos, setAutos] = useState([]);

  //Creamos un useState para almacenar la busqueda y capturamos el texto (esto lo ocupamos en el filtro de publicaciones)
  const [search, setSearch] = useState('');

  const [combustibleFilter, setCombustibleFilter] = useState('');

  const [tipoCaja, setTipoCaja] = useState('');

  const [avatar, setAvatar] = useState(null);


  const seacher = (e) => {

    setSearch(e.target.value)

  }// fin 

  const eliminarAuto = (id) => {
    setAutos(autos.filter(auto => auto.id !== id));
    AlertaEliminar();
  }

  const getAutos = async () => {
      const res =  await fetch(`http://localhost:3000/autos.json`);
      const data = await res.json(); 
      setAutos(data);
     
  } 
 
  
  useEffect(() => {
      getAutos(); 

  }, []) 


  //Alertas 
  const AlertaExitosa = () => {

    Swal.fire('OK', 'Sesion Iniciada con Exito', 'success');
  }
  
  const AlertaError = () => {

    Swal.fire('Error', 'Correo o contraseña incorrecto', 'error');
  }

  const AlertaEliminar = () => {

    Swal.fire({
      title: 'Publicacion Eliminada',
      text: 'se ha eliminado la publicacion',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000 // espera 3 segundos
    });
  }

  const AlertaRegistro = () => {

    Swal.fire({
      title: 'Registro exitoso',
      text: 'El usuario ha sido registrado correctamente seras redirigido',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000 // espera 3 segundos
    });
  }

  //fin alertas

  const [modal, setModal] = useState(false);

    const abrirModal = () => {
        setModal(!modal);
      };


  //Usuarios registrados
  const [usuario, setUsuario] = useState({});
    const [lstUsuarios, setLstUsuarios] = useState ([
      {   
          id:1,
          nombre: 'Diego',
          apellido: 'Fuentes',
          email: 'dfuentes@gmail.com',
          telefono: 951697236,
          clave: '1234',
          avatar: 'avatar1'
      },  
          
       
      {   id:2,
          nombre: 'Juan',
          apellido: 'Gomez',
          email: 'juan@gmail.com',
          telefono:951068758,
          clave: '123456',
          avatar: 'avatar2'
      }
  ]);

  //fin usuarios


 
    return (

        <ContextoGlobal.Provider value={{avatar, setAvatar, autos, setAutos, lstUsuarios,setLstUsuarios, setUsuario, usuario, AlertaError, AlertaExitosa, AlertaRegistro, getAutos, search, seacher, combustibleFilter, setCombustibleFilter, tipoCaja, setTipoCaja, modal, setModal, abrirModal, eliminarAuto}}>

          {props.children}
          
        </ContextoGlobal.Provider>
    )
}



export default ContextoGlobal;
