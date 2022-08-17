import React from "react";
import {PaginationProps} from "../interface/interface";
import '../styles/Pagination.scss'

export function Pagination({paginate, pageNumbers, currentPage}: PaginationProps) {


    return (
        <div className='pagination'>
            {
                pageNumbers.map(page =>
                    <button
                        key={page}
                        className={currentPage === page ? 'pagination__button active' : 'pagination__button'}
                        onClick={(e) => {
                            paginate(page)
                        }}>
                        {page}
                    </button>
                )
            }
        </div>
    )
}