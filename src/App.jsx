import { HotTable } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry';
import { useRef, useState } from 'react';
import { TablaUsuarios } from './components/Contenido/TablaUsuarios';
registerAllModules();
function App() {
  const [datos, setDatos] = useState()
  const hotRef = useRef()

  const hotTableProps = {
    ref: hotRef,
    colWidths: 100,
    startRows: 20,
    startCols: 21,
    manualRowMove: true,
    rowHeaders: true,
    colHeaders: ['CODIGO', 'NOMBRES', 'DNI', 'CATEGORIA', 'DETALLE', 'CURSO', 'FECHAS DE CAPACITACIÓN', 'DURACIÓN', 'FIRMA', 'MES', 'AÑO', 'NOTA', 'TENOR', 'INICIO', 'TERMINO', 'CURSO 1', 'CURSO 2', 'CURSO 3', 'CURSO 4', 'CURSO 5', 'CURSO 6'],
    height: "auto",
    licenseKey: "non-commercial-and-evaluation"
  };


  const generarCertificate = () => {
    const dataTable = hotRef.current.hotInstance.getData()
    const arrayDeObjetos = dataTable.map(subArray => {
      const objeto = {};
      subArray.forEach((valor, index) => {
        if (valor !== null) {
          objeto[`valor${index}`] = valor;
        }
      });
      return objeto;
    })
      .filter(objeto => Object.keys(objeto).length > 0);
    setDatos(arrayDeObjetos)

  }

  return (
    <div>
      <h1>Generar Certificados DESARROLLO GLOBAL</h1>
      <HotTable
        {...hotTableProps}
      />
      <button onClick={generarCertificate}>Generar PDF</button>
      <div>
        <h2>Tabla de usuarios Certificado</h2>
        {
          datos && datos.map((dato) => (
            <TablaUsuarios dato={dato} key={dato.valor0} />
          ))
        }
      </div>


    </div>
  )
}

export default App
