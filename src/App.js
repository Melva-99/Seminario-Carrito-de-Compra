import { Fragment, useState, useEffect, useRef } from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import  React  from "react";

// base de datos
const informacion = {
  articulos: [
    {id: 1, nombre: 'Ácido Hialurónico', precio: 350, imagen: '/images/Hyaluronic.jpeg'},
    {id: 2, nombre: 'Mascarilla facial', precio: 45, imagen: '/images/Mask-face.jpg'},
    {id: 3, nombre: 'Cepillo facial', precio: 150, imagen: '/images/cepillo.jpg'},
    {id: 4, nombre: 'Headband', precio: 80, imagen: '/images/headband.jpg'},
    {id: 5, nombre: 'Mascarilla para labios', precio: 25, imagen: '/images/mask-lips.jpg'},
    {id: 6, nombre: 'Espuma blanqueadora', precio: 150, imagen: '/images/espuma-facial.jpg'},
  ],
  carrito: [
    //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
  ]
}

export const Cantidad = React.createContext()
export const Datos = React.createContext()

function App() {
  const [cantidad,setCantidad]=useState(0)
  const [data, setData] = useState(informacion)
  const borrar = useRef()
  
  const agregarAlCarro = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }
    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  const eliminarCarro = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      data.carrito.forEach((x,index) =>{   
        if( x.id === producto.id){
          borrar.current=producto.nombre;
          data.carrito.splice(index,1);
        }
      })
      setData({...data})
    }
  }
  
  useEffect(() => {
   setCantidad(data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)) 
  }, [data]);
   
  
  return (
    <Cantidad.Provider value={cantidad}>
      <Datos.Provider value={data}>
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito}  eliminarCarro={eliminarCarro}  />
        <Articulos agregarAlCarro={agregarAlCarro} data={data} borrar={borrar} />
      </Fragment>
      </Datos.Provider>
    </Cantidad.Provider>

  );
}

export default App;
