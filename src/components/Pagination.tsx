import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { PaginationStyled } from './style';

type PaginationProps = {
  totalItems: number;
  pageSize: number;
  handleChangePage: any;
  currentPage: number;
};

export default function RegularPagination({
  totalItems,
  pageSize,
  handleChangePage,
  currentPage,
}: PaginationProps) {
  const getPager = () => {
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let pages = [] as any;
    for (let index = startPage; index <= endPage; index++) {
      pages.push(index);
    }
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages,
    };
  };
  const pager = getPager();
  return (
    <PaginationStyled>
      <Pagination>
        <Pagination.Item
          onClick={() => handleChangePage(1)}
          className="pagi-move"
        >
          First
        </Pagination.Item>

        {pager.pages.map((page, index) => (
          <Pagination.Item
            key={index}
            active={page === currentPage}
            onClick={() => page !== currentPage && handleChangePage(page)}
            className="pagi-item"
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Item
          onClick={() => handleChangePage(pager.totalPages)}
          className="pagi-move"
        >
          Last
        </Pagination.Item>
      </Pagination>
    </PaginationStyled>
  );
}
