import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Eliminar } from '../Eliminar'
import { BotonCarro, CarroContenedor, Lista, ListaContenedor, ListaLi } from './styles'

export const Carro = ({ cantidad, productos, eliminarCarro }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)


    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <BotonCarro onClick={handleMostrarCarro} >Carro</BotonCarro>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaContenedor>
                        <Lista>
                            {
                                productos.map(x => {
                                    return (
                                        <ListaLi>    
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><Eliminar prod={x} eliminarCarro={eliminarCarro}>x</Eliminar>{x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </ListaLi> 
                                    )
                                })
                            }
                            <ListaLi>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </ListaLi>
                            <ListaLi>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </ListaLi>
                            <ListaLi>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </ListaLi>
                        </Lista>
                    </ListaContenedor>
            }
        </CarroContenedor>
    )
}