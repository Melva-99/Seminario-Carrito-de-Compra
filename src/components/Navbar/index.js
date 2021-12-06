import { useContext } from 'react'
import { Carro } from '../Carro'
import { NavBar } from './styles'
import { Cantidad, Datos } from "../../App"

export const Navbar = ({ eliminarCarro }) => {

    let cantidad = useContext(Cantidad)
    let productos = useContext(Datos)

    return (
        <NavBar>
            <h2>Dino Store</h2>
            <Carro cantidad={cantidad} productos={productos.carrito} eliminarCarro={eliminarCarro} />
        </NavBar>
    )
}