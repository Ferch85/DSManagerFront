import React, { useState } from 'react'
import JSZip from 'jszip';



const CargaArchivos = () => {
    const [reg501, setReg501] = useState([]);

    const archivoHandler = async (e) => {       
        const zipFile = e.target.files[0];

        if (!zipFile) return;
        
        const jszip = new JSZip();
        const zip = await jszip.loadAsync(zipFile);
        zip.forEach(async (relativePath, file) => {
            if (file.name.endsWith(".asc")) {
              const txtContent = await file.async("text");
              if(file.name.endsWith("501.asc")){
                //console.log(txtContent.split("\n"));
                txtContent.split("\n").map((i, indexi) => {
                    console.log(i.split("|"));
                    if(i !== "" ) {
                        //console.log(i);
                        i.split('|').map(aee => {
                            console.log(indexi+' '+aee.split('\n'))
                        })
                    }
                })
              }
              
              //reg501.push(txtContent.split("\n"))
              //console.log(reg501);
            }
        });
    }
    const submitHandler = () => {

    }

  return (    
    <>
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    Carga arhivo .zip
                </label>
                <input 
                    type="file"
                    accept=".zip"
                    placeholder="Archivo datastage"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"    
                    onChange={archivoHandler}                
                />
                <input
                    type="submit"
                    value="Cargar Archivo"
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                />

                
            </div>
        </form>
    </>
  )
}

export default CargaArchivos