import React, { useState, useEffect } from "react";
import Lista from "./Lista";
import ReactPaginate from "react-paginate";
function Paginacion(props) {
  const { losDatos, pageLimit, pageNeighbours, setFile } = props;
  const totalRecords = losDatos.length;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(losDatos.length / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + pageLimit;
    setCurrentData(losDatos.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(losDatos.length / pageLimit));
  }, [itemOffset, pageLimit, losDatos]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % losDatos.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="paginacion">
        <ReactPaginate
          nextLabel="Sig >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< Ant"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <Lista setFile={setFile} datos={currentData}></Lista>
    </>
  );
}

export default Paginacion;
