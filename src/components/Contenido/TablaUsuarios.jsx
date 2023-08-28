import { BlobProvider, Document, PDFDownloadLink, Page, pdf, Text, usePDF } from "@react-pdf/renderer"
import { PDFDesarrollo } from "../GenerarPdf/PDFDesarrollo"
import QRCode from 'qrcode.react';
import { useState } from "react";

const MyDoc = (
    <Document>
        <Page>
            <Text>Te mamaste</Text>
        </Page>
    </Document>
);


export const TablaUsuarios = ({ dato }) => {

    const [instance, updateInstance] = usePDF({ document: MyDoc });

    console.log(instance)

    if (instance.loading) return <div>Loading ...</div>;
  
    if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <table style={{ border: "1px solid black" }}>
            <thead>
                <tr>
                    <th>CODIGO</th>
                    <th>NOMBRES</th>
                    <th>TIPO</th>
                    <th>Codigo QR</th>
                    <th>DESCARGAR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{dato.valor0}</th>
                    <th>{dato.valor1}</th>
                    <th>{dato.valor3}</th>
                    <th><QRCode
                        id={dato.valor0}
                        value={`https://desarrolloglobal.pe/buscar_certificado?c=${dato.valor0}`}
                        bgColor="#FFF"
                        width={20}
                        height={20}
                        style={{ display: "hidden" }}
                        fgColor="#000"
                        level={"H"}
                        className="!w-12 !h-12"
                    /></th>
                    <th><button><ButtonPDF dato={dato} /></button></th>
                </tr>
            </tbody>
        </table>
    )
}


const ButtonPDF = ({ dato }) => {

    return (
        <PDFDownloadLink document={<PDFDesarrollo dato={dato} />} fileName={`${dato.valor0}.pdf`}>
            <button className="bg-red-500 text-white px-5 py-2 rounded-md font-bold flex items-center gap-3 w-full justify-center h-full">Descargar PDF</button>
        </PDFDownloadLink>
    )
}