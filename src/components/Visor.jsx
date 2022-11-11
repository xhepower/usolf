import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import * as dotenv from "dotenv";
import datoService from "../services/dato.service";
const urlPath = `https://usolb.sfo3.digitaloceanspaces.com`;
//https://usolb.sfo3.digitaloceanspaces.com/usol-10082022-MARIA_ANGELA_ROMERO_ROMERO-1705198400621.pdf
function Visor(props) {
  const { file } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  //return `${urlPath}/${file}.pdf`;
  return (
    <div className="reader-container">
      <div className="nav-PDF">
        <button className="pdf-prev" onClick={goToPrevPage}>
          Anterior
        </button>
        <p className="pdf-PageNumber">
          Página <b>{pageNumber}</b> de <b>{numPages}</b>
        </p>
        <button className="pdf-next" onClick={goToNextPage}>
          Siguiente
        </button>
      </div>
      <div className="document-container">
        <Document
          file={`${urlPath}/${file}.pdf`}
          //file="http://localhost:5001/datos/E845519.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Visor;
