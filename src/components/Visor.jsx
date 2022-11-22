import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import datoService from "../services/dato.service";
const urlPath = `localhost:3000`;
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
          file={`${urlPath}/${file}`}
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
