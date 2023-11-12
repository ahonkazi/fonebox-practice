"use client"
import React, { useMemo, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './ProductPagination.css';
import Pagination from '@/utils/Pagination';
const ProductPagination = () => {
    let totalPage = 80;
    let itemPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="mt-wrapper flex justify-center">
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalPage}
                pageSize={itemPerPage}
                onPageChange={page => setCurrentPage(page)}
                paginationContainerClassName='ProductPagination'
                paginationItemClassName='pagination-item'
                disableClassName='disabled'
                prevClassName='prev'
                nextClassName='next'
                activeClassName='active-link'
            />
        </div>
    )
}

export default ProductPagination
