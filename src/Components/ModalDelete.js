import React from 'react'

const ModalDelete = ({isOpen, onClose, record, onDelete}) => {
  const handelClic = () => {
    onDelete();
    onClose();
  }
  return (
    <>
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg p-6">
                <div className="p-2">
                    <h2 className="text-2xl mb-2 mt-2" >Desea eliminar el registro seleccionado?: </h2>                        
                </div>
                <div className="flex p-2 place-content-center">
                    <button className="bg-blue-500 text-white m-2 px-10 py-2" onClick={handelClic}>Aceptar</button>
                    <button className="bg-red-600 text-white m-2 px-10 py-2" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    </>

  )
}

export default ModalDelete