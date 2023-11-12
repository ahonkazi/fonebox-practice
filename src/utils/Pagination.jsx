import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./pagination.scss";
const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
        paginationContainerClassName = null,
        paginationItemClassName = null,
        disableClassName,
        prevClassName,
        nextClassName,
        dotsClassName,
        activeClassName

    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage < lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={`${paginationContainerClassName ? paginationContainerClassName : ''}`}
        >
            <li
                className={` ${currentPage === 1 ? (disableClassName ? disableClassName : '') : ''}`}
                onClick={onPrevious}
            >
                <div className={`${prevClassName ? prevClassName : ''}`}>Previous</div>
            </li>
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return <li className={`${dotsClassName ? dotsClassName : ''}`}>&#8230;</li>;
                }

                return (
                    <li
                        className={`${paginationItemClassName ? paginationItemClassName : ''} ${currentPage === pageNumber ? (activeClassName ? activeClassName : '') : ''} `}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`${currentPage === lastPage ? (disableClassName ? disableClassName : '') : ''}`}
                onClick={onNext}
            >
                <div className={`${nextClassName ? nextClassName : ''}`}>next</div>
            </li>
        </ul>
    );
};

export default Pagination;
