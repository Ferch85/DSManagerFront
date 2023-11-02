import React, { useState } from "react";

const EditModal = ({ isOpen, onClose, record, onSave }) => {
    const [editedRecord, setEditedRecord] = useState(record);
    const handleInputChange = (e) => {        
        const {name, value} = e.target;     
        console.log(e.target)   
        setEditedRecord({ ...editedRecord, [name]: value });   
        console.log(editedRecord)
    };


    const handleSave = (e) => {
        e.preventDefault();
        onSave(editedRecord);        
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>

            <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">            
                <div className="relative bg-white w-1/2 rounded-lg shadow-lg p-6">
                    <div className="absolute top-0 right-0 p-4">
                        <h2 className="text-2xl mb-4 mt-4">RFC: <span className="text-indigo-600">{record.rfc}</span></h2>                        
                    </div>
                    <h2 className="text-2xl mb-4">
                        Editar Cliente <span className="text-2xl text-indigo-600">{record.customer_id}</span>
                    </h2>
                    <form onSubmit={handleSave}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="id"
                                value={record.id}
                                hidden                                
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                value={editedRecord.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Telefono:</label>
                            <input
                                type="text"
                                name="telefono"
                                value={editedRecord.telefono}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Ciudad:</label>
                            <input
                                type="text"
                                name="ciudad"
                                value={editedRecord.ciudad}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>     

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Estado:</label>
                            <input
                                type="text"
                                name="estado"
                                value={editedRecord.estado}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        {/* Add more fields as needed */}
                        <input type="submit" className="bg-blue-500 text-white rounded px-10 py-2 mr-5"
                            value="Guardar"
                        />
                        <button onClick={onClose} className="bg-red-500 text-white rounded px-10 py-2 ml-5">
                            Cancelar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;
