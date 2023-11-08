import { useContext } from 'react'
import ClienteContext from '../Context/ClienteProvider'


const useClientes = () => {
  return (
    useContext(ClienteContext)
  )
}

export default useClientes