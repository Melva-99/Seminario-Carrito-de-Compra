import { Boton } from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Boton onClick={() => agregarAlCarro(prod)} >{children}</Boton>
    )
}
