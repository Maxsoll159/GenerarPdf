import { Document, Font, Page } from "@react-pdf/renderer"
import { Html } from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';

Font.register({
    family: 'Cinzel',
    fonts: [
        { src: "/fonts/Cinzel-VariableFont_wght.ttf", fontWeight: 100, fontSize: "120px" },
    ],
});
Font.register({
    family: 'Fira Sans',
    fonts: [
        { src: "/fonts/FiraSans-Regular.ttf", fontWeight: 100 },
    ]
});
Font.register({
    family: 'Cinzel-bold',
    fonts: [
        { src: "/fonts/Cinzel-Black.ttf", fontWeight: 600, }
    ],
});


const stylesheet = {
    ['.contenedor']: {
        width: "100vw",
        height: "100vh"
    },
    h1: {
        fontSize: "45px"
    },
    h6: {
        fontFamily: "Cinzel-bold",
    },
    p: {
        fontSize: "12px",
        fontFamily: "Fira Sans",
        color: "black"
    },
    ['.paddingArr']: {
        marginTop: "-5px"
    },
    ['.textCentrado']: {
        textAlign: "center",
        lineHeight: "1.2",
    },
    ['.paddingHoja2']: {
        marginTop: "15px"
    },
    ['.paddingLetras']: {
        marginTop: "-16px",
        fontSize: "13px",
        textAlign: "center"
    },
    ['.sinNota']: {
        marginTop: "50px"
    },
    [".tituloCurso"]: {
        fontSize: "54px",
        marginTop: "15px"
    },
    [".tituloDiplo"]: {
        fontSize: "54px",
        marginTop: "-20px"
    },
    [".letrasTabla"]: {
        fontSize: "11px",
    },
    [".marginTopdi"]: {
        marginTop: "-9px"
    },
    table: {
        borderCollapse: "collapse"
    }
};

export const PDFDesarrollo = ({ dato }) => {

    const url = document.getElementById(dato.valor0).toDataURL()

    const element = (
        <div className="contenedor">
            {
                dato.valor3 !== "Curso" ? (
                    <img src="/img/CertificadoDiplo.png" alt="" style={{ position: "absolute", width: "100%", height: "100%" }} />
                ) : (<img src="/img/CertificadoCurso.png" alt="" style={{ position: "absolute", width: "100%", height: "100%" }} />) 
            }
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "29%", top: "25%", width: "55%" }}>
                {
                    dato.valor3 !== "Curso" ? (
                        <h1 className={`textCentrado tituloDiplo`} style={{ fontFamily: "Cinzel", fontWeight: 100 }} >CERTIFICADO</h1>
                    ) : (<h1 className={`textCentrado tituloCurso`} style={{ fontFamily: "Cinzel",  fontWeight: 100 }} >CERTIFICADO</h1>)
                }
                <div className="textCentrado" style={{ marginTop: "-30px" }}>
                    <p>Con código CCDG-{dato.valor0}, que se otorga a</p>
                </div>
                {
                    dato.valor1.length < 25 ? (
                        <h2 className="paddingArr textCentrado capitalize" style={{ fontFamily: "Cinzel-bold", fontWeight: 600 }}>{dato.valor1}</h2>
                    ) : (<h3 className="paddingArr textCentrado capitalize" style={{ fontFamily: "Cinzel-bold", fontWeight: 600 }}>{dato.valor1}</h3>)
                }
                <p className="paddingArr textCentrado" style={{ width: "430px", marginLeft: "20px" }}>En  reconocimiento  por  haber  cumplido  con  los  requisitos  académicos  exigidos  y por haber aprobado satisfactoriamente el Curso Especializado, Denominado:  </p>
                {
                    dato.valor12.length < 30 ? (
                        <h2 className="paddingArr textCentrado" style={{ fontFamily: "Cinzel-bold" }}>{dato.valor12}</h2>
                    ) : (<h4 className="paddingArr textCentrado" style={{ fontFamily: "Cinzel-bold" }}>{dato.valor12}</h4>)
                }
                <p className="paddingArr textCentrado" style={{ width: "475px" }}>Realizado desde el {dato.valor6}, con una duración total de {dato.valor7} horas lectivas. Dado y firmado en la ciudad de Lima, {dato.valor8} del {dato.valor9} del {dato.valor10} .</p>
            </div>
        </div>
    )

    const element2 = (

        <div style={{ width: "100vw", height: "100vh" }}>
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "24.5%", top: "27%", width: "66%" }}>
                <h6 className='textCentrado'>Curso {dato.valor4}</h6>
                <h6 className='textCentrado marginTopdi' style={{ textTransform: "uppercase" }}>{dato.valor12}</h6>
                <h4 className="textCentrado">PROMEDIO</h4>

                <table style={{ border: "1px solid black", width: "250px", margin: "0 auto" }}>
                    <tr className="textCentrado" style={{fontSize: "15px"}}>
                        <th style={{paddingTop: "2px"}}><span>NOTA</span></th>
                        <th style={{borderLeft: "1px solid black", paddingTop: "2px"}}><span>{dato.valor11}</span></th>
                    </tr>
                </table>



                <h6 className='textCentrado'>CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL</h6>
                <h6 className='textCentrado marginTopdi'>RUC: 20544396791</h6>
                <div style={{ width: "380px", margin: "0 auto" }}>
                    <p className='textCentrado paddingLetras'>La Secretaría Académica que suscribe: certifica que el certificado Nº {dato.valor0}, ha sido inscrito en el registro de certificaciones en la ciudad de Lima, {dato.valor8} del mes de {dato.valor9} a los {dato.valor10}.</p>
                </div>
                <img src={url} alt="" style={{ margin: "0 auto", width: "100px" }} />
            </div>
        </div>

    )

    const html1 = ReactDOMServer.renderToStaticMarkup(element);
    const html2 = ReactDOMServer.renderToStaticMarkup(element2);


    return (
        <Document>
            <Page size="A4" orientation="landscape">
                <Html stylesheet={stylesheet}>{html1}</Html>
            </Page>
            <Page size="A4" orientation="landscape">
                <Html stylesheet={stylesheet}>{html2}</Html>
            </Page>
        </Document>
    )
}


