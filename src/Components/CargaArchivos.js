import React, { useState, useEffect } from 'react'
import JSZip from 'jszip';
import Alerta from './Alerta';
import clienteAxios from 'axios';
import Sipnner from './Sipnner';



const CargaArchivos = () => {
    const [reg501, setReg501] = useState([]);
    const [reg502, setReg502] = useState([]);
    const [reg503, setReg503] = useState([]);
    const [reg504, setReg504] = useState([]);
    const [reg505, setReg505] = useState([]);
    const [reg506, setReg506] = useState([]);
    const [reg507, setReg507] = useState([]);
    const [reg508, setReg508] = useState([]);
    const [reg509, setReg509] = useState([]);
    const [reg510, setReg510] = useState([]);
    const [reg511, setReg511] = useState([]);
    const [reg512, setReg512] = useState([]);
    const [reg520, setReg520] = useState([]);
    const [reg551, setReg551] = useState([]);
    const [reg552, setReg552] = useState([]);
    const [reg553, setReg553] = useState([]);
    const [reg554, setReg554] = useState([]);
    const [reg555, setReg555] = useState([]);
    const [reg556, setReg556] = useState([]);
    const [reg557, setReg557] = useState([]);
    const [reg558, setReg558] = useState([]);
    const [reg701, setReg701] = useState([]);
    const [reg702, setReg702] = useState([]);
    const [claveClienteG, setClaveClienteG] = useState('');
    const [identificadorDS, setIdentificadorDs] = useState('');
    const [archivoCarga, setArchivoCarga] = useState('');
    const [alerta, setAlerta] = useState(false);
    const [spinnerLoad, setSpinnerLoad] = useState(false);
    const [idRegs, setIdRegs] = useState([]);

    useEffect(() => {
        clienteAxios.get('http://localhost:3001/api/regids')
        .then(response => {          
            setIdRegs(response.data)
        })
        .catch(error => {
          console.error('Error al hacer la solicitud', error)
        })
      },[])

    const archivoHandler = async (e) => {    
        setArchivoCarga(e.target.value);
        const zipFile = e.target.files[0];

        if (!zipFile) return;
        
        const jszip = new JSZip();
        const zip = await jszip.loadAsync(zipFile);
        zip.forEach(async (relativePath, file) => {
            if (file.name.endsWith(".asc")) {
              const txtContent = await file.async("text");
              if(file.name.endsWith("501.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea501 = i.split("|");
                        const obj501 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea501[2].substring(0, 2)}-${linea501[0]}-${linea501[1]}`,
                            patente: linea501[0],
                            pedimento: linea501[1],
                            seccion: linea501[2],
                            tipo: linea501[3],
                            clave: linea501[4],
                            secEntrada: linea501[5],
                            curpContribuyente: linea501[6],
                            rfc: linea501[7],
                            curpAA: linea501[8],
                            tipoCambio: parseFloat(linea501[9]),
                            totalFletes: parseFloat(linea501[10]),
                            totalSeguros: parseFloat(linea501[11]),
                            totalEmbalaje: parseFloat(linea501[12]),
                            totalIncre: parseFloat(linea501[13]),
                            totalDeducible: parseFloat(linea501[14]),
                            pesoBruto: parseFloat(linea501[15]),
                            medioTranS: linea501[16],
                            medioTranA: linea501[17],
                            medioTranEntrada: linea501[18],
                            destinoMerca: linea501[19],
                            nombreContribuyente: linea501[20],
                            calleContribuyente: linea501[21],
                            numInteriorContribuyente: linea501[22],
                            numExteriorContribuyente: linea501[23],
                            cpContribuyente: linea501[24],
                            municipioContribuyente: linea501[25],
                            entidadFContribuyente: linea501[26],
                            paisContribuyente: linea501[27],
                            tipoPedimento: linea501[28],
                            fechaRecepcionPed: linea501[29],
                            fechaPagoReal: linea501[30],
                        }
                        setReg501(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj501);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("502.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea502 = i.split("|");
                        const obj502 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea502[2].substring(0, 2)}-${linea502[0]}-${linea502[1]}`,                            
                            patente: linea502[0],
                            pedimento: linea502[1],
                            seccion: linea502[2],
                            rfcTrans: linea502[3],
                            curpTrans: linea502[4],
                            nombreTrans: linea502[5],
                            paisTransporte: linea502[6],
                            idTransporte: linea502[7],
                            fechaPagoReal: linea502[8],
                        }
                        setReg502(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj502);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("503.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea503 = i.split("|");
                        const obj503 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea503[2].substring(0, 2)}-${linea503[0]}-${linea503[1]}`,                              
                            patente: linea503[0],
                            pedimento: linea503[1],
                            seccion: linea503[2],
                            numerGuia: linea503[3],
                            tipoGuia: linea503[4],
                            fechaPagoReal: linea503[5],                            
                        }
                        setReg503(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj503);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("504.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea504 = i.split("|");
                        const obj504 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea504[2].substring(0, 2)}-${linea504[0]}-${linea504[1]}`,  
                            patente: linea504[0],
                            pedimento: linea504[1],
                            seccion: linea504[2],
                            tipo: linea504[3],
                            clave: linea504[4],
                            secEntrada: linea504[5],                            
                        }
                        setReg504(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj504);
                            return updatedRegs;
                        })
                    }
                })                
              }else if(file.name.endsWith("505.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea505 = i.split("|");
                        const obj505 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea505[2].substring(0, 2)}-${linea505[0]}-${linea505[1]}`,  
                            patente: linea505[0],
                            pedimento: linea505[1],
                            seccion: linea505[2],
                            fechaFacturacion: linea505[3],
                            numFactura: linea505[4],
                            terminoFacturacion: linea505[5],
                            monedaFacturacion: linea505[6],
                            valorDolares: parseFloat(linea505[7]),
                            valorMonedaExtranjera: parseFloat(linea505[8]),
                            paisFacturacion: linea505[9],
                            entidadFedFact: linea505[10],
                            identFiscalProv: linea505[11],
                            proovedorMerca: linea505[12],
                            calleProv: linea505[13],
                            numIntProv: linea505[14],
                            numExteriorProv: linea505[15],
                            cpProv: linea505[16],
                            municipioProv: linea505[17],
                            fechaPagoReal: linea505[18],
                        }
                        setReg505(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj505);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("506.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea506 = i.split("|");
                        const obj506 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea506[2].substring(0, 2)}-${linea506[0]}-${linea506[1]}`,  
                            patente: linea506[0],
                            pedimento: linea506[1],
                            seccion: linea506[2],
                            tipoFecha: linea506[3],
                            fechaOperacion: linea506[4],
                            fechaValidacion: linea506[5],
                        }
                        setReg506(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj506);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("507.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea501 = i.split("|");
                        const obj501 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea501[2].substring(0, 2)}-${linea501[0]}-${linea501[1]}`,  
                            patente: linea501[0],
                            pedimento: linea501[1],
                            seccion: linea501[2],
                            claveCaso: linea501[3],
                            idCaso: linea501[4],
                            tipoPed: linea501[5],
                            complementoCaso: linea501[6],
                            fechaValidacion: linea501[7],
                        }
                        setReg507(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj501);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("508.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea508 = i.split("|");
                        const obj508 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea508[2].substring(0, 2)}-${linea508[0]}-${linea508[1]}`,  
                            patente: linea508[0],
                            pedimento: linea508[1],
                            seccion: linea508[2],
                            institucionEmisora: linea508[3],
                            numCuenta: linea508[4],
                            folioConstancia: linea508[5],
                            fechaConstancia: linea508[6],
                            tipoCuenta: linea508[7],
                            claveGarantia: linea508[8],
                            valorUnitarioTitulo: parseFloat(linea508[9]),
                            totalGarantia: parseFloat(linea508[10]),
                            cantidadUnidades: parseFloat(linea508[11]),
                            titulosAsignados: linea508[12],
                            fechaPagoReal: linea508[13],
                        }
                        setReg508(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj508);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("509.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea509 = i.split("|");
                        const obj509 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea509[2].substring(0, 2)}-${linea509[0]}-${linea509[1]}`,  
                            patente: linea509[0],
                            pedimento: linea509[1],
                            seccion: linea509[2],
                            calveContribucion: linea509[3],
                            tasaContribucion: parseFloat(linea509[4]),
                            tipoTasa: linea509[5],
                            tipoPedimento: linea509[6],
                            fechaPagoReal: linea509[7],
                        }
                        setReg509(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj509);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("510.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea510 = i.split("|");
                        const obj510 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea510[2].substring(0, 2)}-${linea510[0]}-${linea510[1]}`,  
                            patente: linea510[0],
                            pedimento: linea510[1],
                            seccion: linea510[2],
                            claveContribucion: linea510[3],
                            formaPago: linea510[4],
                            importePago: linea510[5],
                            tipoPedimento: linea510[6],
                            fechaPagoReal: linea510[7],
                        }
                        setReg510(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj510);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("511.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea511 = i.split("|");
                        const obj511 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea511[2].substring(0, 2)}-${linea511[0]}-${linea511[1]}`,  
                            patente: linea511[0],
                            pedimento: linea511[1],
                            seccion: linea511[2],
                            secuenciaObs: linea511[3],
                            observaciones: linea511[4],
                            tipoPedimento: linea511[5],
                            fechaValidacion: linea511[6],
                        }
                        setReg511(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj511);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("512.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea512 = i.split("|");
                        const obj512 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea512[2].substring(0, 2)}-${linea512[0]}-${linea512[1]}`,  
                            patente: linea512[0],
                            pedimento: linea512[1],
                            seccion: linea512[2],
                            patenteAduanaOriginal: linea512[3],
                            pedimentoOriginal: linea512[4],
                            secAduaneraDespO: linea512[5],
                            documentoOriginal: linea512[6],
                            fechaOperacionOrig: linea512[7],
                            fraccionOriginal: linea512[8],
                            unidadMedida: linea512[9],
                            mercanciaDes: linea512[10],
                            tipoPedimento: linea512[11],
                            fechaPagoReal: linea512[12],
                        }
                        setReg512(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj512);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("520.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea520 = i.split("|");
                        const obj520 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea520[2].substring(0, 2)}-${linea520[0]}-${linea520[1]}`,  
                            patente: linea520[0],
                            pedimento: linea520[1],
                            seccion: linea520[2],
                            identFiscalDest: linea520[3],
                            nombreDesMerca: linea520[4],
                            calleDest: linea520[5],
                            numInteriorDest: linea520[6],
                            numExterior: linea520[7],
                            cpDest: linea520[8],
                            municipioDest: linea520[9],
                            clavePaisDest: linea520[10],
                            paisDest: linea520[11],
                            fechaPagoReal: linea520[12],
                        }
                        setReg520(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj520);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("551.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea551 = i.split("|");
                        const obj551 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea551[2].substring(0, 2)}-${linea551[0]}-${linea551[1]}`,  
                            patente: linea551[0],
                            pedimento: linea551[1],
                            seccion: linea551[2],
                            fraccion: linea551[3],
                            secuenciaFraccion: linea551[4],
                            subdivisionFraccion: linea551[5],
                            descripcionMercancia: linea551[6],
                            precioUnitario: parseFloat(linea551[7]),
                            valorAduana: parseFloat(linea551[8]),
                            valorComercial: parseFloat(linea551[9]),
                            valorDolares: parseFloat(linea551[10]),
                            cantidadComercial: parseFloat(linea551[11]),
                            unidadMedidaCometcial: linea551[12],
                            cantidadTarifa: parseFloat(linea551[13]),
                            unidadTarifa: linea551[14],
                            valorAgregado: parseFloat(linea551[15]),
                            claveVinculacion: linea551[16],
                            metodoValoracion: linea551[17],
                            codigoMercanciaP: linea551[18],
                            marcaMercanciaP: linea551[19],
                            modeloMercanciaP: linea551[20],
                            paisOrigenDest: linea551[21],
                            paisCompradorVendedor: linea551[22],
                            entidadFedOrigen: linea551[23],
                            entidadFedDestino: linea551[24],
                            entidadFedComprador: linea551[25],
                            entidadFedVendedor: linea551[26],
                            tipoOperacion: linea551[27],
                            claveDocumento: linea551[28],
                            fechaPagoReal: linea551[29],
                        }
                        setReg551(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj551);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("552.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea552 = i.split("|");
                        const obj552 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea552[2].substring(0, 2)}-${linea552[0]}-${linea552[1]}`,  
                            patente: linea552[0],
                            pedimento: linea552[1],
                            seccion: linea552[2],
                            fraccion: linea552[3],
                            secuenciaFrac: linea552[4],
                            vinNumeroSerie: linea552[5],
                            kilometrajeVehi: linea552[6],
                            fechaPagoReal: linea552[7],
                        }
                        setReg552(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj552);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("553.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea553 = i.split("|");
                        const obj553 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea553[2].substring(0, 2)}-${linea553[0]}-${linea553[1]}`,  
                            patente: linea553[0],
                            pedimento: linea553[1],
                            seccion: linea553[2],
                            fraccion: linea553[3],
                            secuenciaFrac: linea553[4],
                            clavePermiso: linea553[5],
                            firmaDescargo: linea553[6],
                            numPermiso: linea553[7],
                            valorComercialDolares: parseFloat(linea553[8]),
                            cantidadMUMTarifa: parseFloat(linea553[9]),
                            fechaPagoReal: linea553[10],
                        }
                        setReg553(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj553);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("554.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea554 = i.split("|");
                        const obj554 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea554[2].substring(0, 2)}-${linea554[0]}-${linea554[1]}`,  
                            patente: linea554[0],
                            pedimento: linea554[1],
                            seccion: linea554[2],
                            fraccion: linea554[3],
                            secuenciaFraccion: linea554[4],
                            claveCaso: linea554[5],
                            identificadorCaso: linea554[6],
                            complementoCaso: linea554[7],
                            fechaPagoReal: linea554[8],
                        }
                        setReg554(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj554);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("555.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea555 = i.split("|");
                        const obj555 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea555[2].substring(0, 2)}-${linea555[0]}-${linea555[1]}`,  
                            patente: linea555[0],
                            pedimento: linea555[1],
                            seccion: linea555[2],
                            fraccion: linea555[3],
                            secuenciaFrac: linea555[4],
                            institucionEmisora: linea555[5],
                            numCuenta: linea555[6],
                            folioConstancia: linea555[7],
                            fechaConstancia: linea555[8],
                            claveGarantia: linea555[9],
                            valorUnitarioTitulo: parseFloat(linea555[10]),
                            totalGarantia: parseFloat(linea555[11]),
                            cantidadUM: parseFloat(linea555[12]),
                            titulosAsignados: linea555[13],
                            fechaPagoReal: linea555[14],
                        }
                        setReg555(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj555);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("556.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea556 = i.split("|");
                        const obj556 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea556[2].substring(0, 2)}-${linea556[0]}-${linea556[1]}`,  
                            patente: linea556[0],
                            pedimento: linea556[1],
                            seccion: linea556[2],
                            fraccion: linea556[3],
                            secuenciaFrac: linea556[4],
                            claveContribucion: linea556[5],
                            tasaContribucion: linea556[6],
                            tipoTasa: linea556[7],
                            fechaPagoReal: linea556[8],
                        }
                        setReg556(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj556);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("557.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea557 = i.split("|");
                        const obj557 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea557[2].substring(0, 2)}-${linea557[0]}-${linea557[1]}`,  
                            patente: linea557[0],
                            pedimento: linea557[1],
                            seccion: linea557[2],
                            fraccion: linea557[3],
                            secuenciaFrac: linea557[4],
                            claveContribucion: linea557[5],
                            formaPago: linea557[6],
                            importePago: parseFloat(linea557[7]),
                            fechaPagoReal: linea557[8],
                        }
                        setReg557(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj557);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("558.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea558 = i.split("|");
                        const obj558 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea558[2].substring(0, 2)}-${linea558[0]}-${linea558[1]}`,  
                            patente: linea558[0],
                            pedimento: linea558[1],
                            seccion: linea558[2],
                            fraccion: linea558[3],
                            secuenciaFrac: linea558[4],
                            secuenciaObs: linea558[5],
                            observaciones: linea558[6],
                            fechaPagoReal: linea558[7],
                        }
                        setReg558(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj558);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("701.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea701 = i.split("|");
                        const obj701 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea701[2].substring(0, 2)}-${linea701[0]}-${linea701[1]}`,  
                            patente: linea701[0],
                            pedimento: linea701[1],
                            seccion: linea701[2],
                            claveDoc: linea701[3],
                            fechaPago: linea701[4],
                            pedimentoAnterior: linea701[5],
                            patenteAnterior: linea701[6],
                            seccionAduaneraAnterior: linea701[7],
                            docAnterior: linea701[8],
                            fechaOperacionAnterior: linea701[9],
                            pedimentoOriginal: linea701[10],
                            patenteOrig: linea701[11],
                            seccionOrig: linea701[12],
                            fechaPagoReal: linea701[13],
                        }
                        setReg701(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj701);
                            return updatedRegs;
                        })
                    }
                })
              }else if(file.name.endsWith("702.asc")){
                txtContent.split("\n").forEach((i, indexi) => {
                    if(i !== "" && indexi !== 0 ) {
                        const linea702 = i.split("|");
                        const obj702 = {
                            id__:'',
                            clavecliente: claveClienteG,
                            identificador: identificadorDS,
                            pedimento_completo: `${linea702[2].substring(0, 2)}-${linea702[0]}-${linea702[1]}`,  
                            patente: linea702[0],
                            pedimento: linea702[1],
                            seccion: linea702[2],
                            tipo: linea702[3],
                            claveContribucion: linea702[4],
                            formaPago: linea702[5],
                            importePago: linea702[6],
                            tipoPedimento: linea702[7],
                            fechaPagoReal: linea702[8],
                        }
                        setReg702(prevRegs => {
                            const updatedRegs = [...prevRegs];
                            updatedRegs.push(obj702);
                            return updatedRegs;
                        })
                    }
                })
              }
              
            }
        });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        if ([claveClienteG, identificadorDS, archivoCarga].includes("")) {
            setAlerta({
              msg: "Todos los campos sol obligatorios",
              error: true,
            });
            return;
        }
        setSpinnerLoad(true);
        if(alerta) {
            setAlerta(false)
        }
        const regGlobal = {
            registros501: reg501,
            registros502: reg502,
            registros503: reg503,
            registros504: reg504,
            registros505: reg505,
            registros506: reg506,
            registros507: reg507,
            registros508: reg508,
            registros509: reg509,
            registros510: reg510,
            registros511: reg511,
            registros512: reg512,
            registros520: reg520,
            registros551: reg551,
            registros552: reg552,
            registros553: reg553,
            registros554: reg554,
            registros555: reg555,
            registros556: reg556,
            registros557: reg557,
            registros558: reg558,
            registros701: reg701,
            registros702: reg702,
        }
        
        try {
            const url = "http://localhost:3001/api";
            const { data } = await clienteAxios.post(url + "/registros", {
              regGlobal
            });            
            
            setAlerta({
                msg: data.msg,
                error: false
            })              
            setTimeout(() => {
               setAlerta(false) 
            }, 3000);
         

          } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error: true,
            });
          }
          setArchivoCarga("");
          setClaveClienteG("");
          setIdentificadorDs("");
          setSpinnerLoad(false);

        
    }
    const identificadorHandler = (e) => {
        setIdentificadorDs(e.target.value);
        
    }
    const validacionHandler = () => {
        //VALIDAR CUANDO UN ID EXISTA EN LA BASE DE DATOS
        if(idRegs.length > 0){
            if (idRegs.includes(identificadorDS) === true){
                setAlerta({
                    msg: 'El identificador ya existe',
                    error: true
                })
            }else{
                setAlerta(false);
            }
        }
    }

    const claveClienteHandler = (e) => {
        setClaveClienteG(e.target.value);
    }
    const msg = alerta;
    
  return (    
    <>
        <form onSubmit={submitHandler}>
            
            <div className="mb-6">
                <label>
                    Identificador:
                </label>
                <input
                    type="text"
                    placeholder="Identificador"
                    value={identificadorDS}
                    className="border w-80 p-3 mt-3 ml-3 bg-gray-50 rounded-xl"
                    onChange={identificadorHandler} 
                    onBlur={validacionHandler}                   
                />            
            </div>
            <div className="mb-6">
                <label>
                    Clave Cliente:
                </label>
                <input
                    type="text"
                    placeholder="Clave de cliente"
                    value={claveClienteG}
                    className="border w-80 p-3 mt-3 ml-3 bg-gray-50 rounded-xl"
                    onChange={claveClienteHandler}
                />                    
            </div>
            
            <div className="flex flex-col">
                <label className="w-full">
                    Carga arhivo .zip
                </label>
                <input 
                    type="file"
                    accept=".zip"
                    placeholder="Archivo datastage"
                    value={archivoCarga}
                    className="border lg:w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-auto"    
                    onChange={archivoHandler}                
                />
                {spinnerLoad&& <Sipnner />}
                <input
                    type="submit"
                    value="Cargar Archivo"
                    className="bg-indigo-700 w-80 py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 mb-6"
                />                
            </div>
        </form>
        {msg&&<Alerta alerta={alerta}/>}
    </>
  )
}

export default CargaArchivos