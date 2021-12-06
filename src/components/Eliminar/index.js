import { DeleteButon } from "./styles"

export const Eliminar = ({children, eliminarCarro, prod}) => {
    return (
        <DeleteButon onClick={() => window.confirm("¿Desea eliminar el producto?")?eliminarCarro(prod):null}>{children}</DeleteButon>
    )
}
