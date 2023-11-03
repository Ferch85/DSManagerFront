import React, { useState } from "react";


const ModalPartidas = ({ isOpen, onClose, record, onSave }) => {
    const [editedRecord, setEditedRecord] = useState(record);
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;    
        name === 'valor_total' ? setEditedRecord({ ...editedRecord, [name]: this.costo_unitario * this.cantidad}) : setEditedRecord({ ...editedRecord, [name]: value });

        console.log(editedRecord);
        
    }
    
    if (!isOpen) {
        return null;
    }

    const handleSave = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>

            <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
                <div className="relative bg-white w-1/2 rounded-lg shadow-lg p-6">
                    <div className="absolute top-0 right-0 p-4">
                        <h2 className="text-2xl mb-4 mt-4">
                            RFC: <span className="text-indigo-600">{record.consecutivo}</span>
                        </h2>
                    </div>
                    <h2 className="text-2xl mb-4">
                        Editar Partida <span className="text-2xl text-indigo-600">{record.linea}</span>
                    </h2>
                    <form onSubmit={handleSave}>                        
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Producto:</label>
                            <input
                                type="text"
                                name="producto"
                                value={editedRecord.producto}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Descripcion:</label>
                            <input
                                type="text"
                                name="descripcion"
                                value={editedRecord.descripcion}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Cantidad:</label>
                            <input
                                type="number"
                                name="cantidad"
                                value={editedRecord.cantidad}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Precio Unitario:</label>
                            <input
                                type="number"
                                name="precio_unitario"
                                value={editedRecord.precio_unitario}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        {/* Add more fields as needed */}
                        <input type="submit" className="bg-blue-500 text-white rounded px-10 py-2 mr-5" value="Guardar" />
                        <button onClick={onClose} className="bg-red-500 text-white rounded px-10 py-2 ml-5">
                            Cancelar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalPartidas;
