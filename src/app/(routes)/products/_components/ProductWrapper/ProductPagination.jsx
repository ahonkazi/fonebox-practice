"use client"
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import './ProductPagination.css';
const ProductPagination = () => {
    let itemsPerPage = 15;
    let totalPage = 4;
    const [itemOffset, setItemOffset] = useState(0);
    const [selectedPage, setSelectedPage] = useState(1);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % totalPage;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setSelectedPage(event.selected + 1);
    };

    console.log(selectedPage)
    return (
        <div className="mt-wrapper flex justify-center">
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={totalPage}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="ProductPagination"
                pageLinkClassName="pagination-item"
                activeLinkClassName="active-link"
                previousClassName='prev'
                nextClassName='next'
                disabledClassName='disabled'

            />
        </div>
    )
}

export default ProductPagination
