import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalUsersCount, currentPageNumber, onPageChange }) => {
    const pagesToDisplayInARow = 5;
    const totalPagesCount = Math.ceil(totalUsersCount / pagesToDisplayInARow);

    const spans = [];
    const isActivePage = (i, current) => i === current;

    const PaginationItem = ({ pageNumber }) => (
        <span
            key={pageNumber}
            id={pageNumber}
            className={
                styles.item +
                ' ' +
                (isActivePage(pageNumber, currentPageNumber) ? styles.itemActive : '')
            }
            onClick={() => {
                onPageChange(pageNumber);
            }}
        >
            {pageNumber}
        </span>
    );

    const PaginationButton = ({ text, target, currentPageNum, lastPageNum }) => {
        let targetPage;
        switch (target) {
            case 'previous':
                targetPage = Math.max(currentPageNum - 1, 1);
                break;
            case 'next':
                targetPage = Math.min(currentPageNum + 1, lastPageNum);
                break;
            case 'end':
                targetPage = lastPageNum;
                break;
            default:
                targetPage = 1;
        }
        return (
            <button id={target} type="button" onClick={() => onPageChange(targetPage)}>
                {text}
            </button>
        );
    };

    return (
        <div className={styles.container}>
            {/* {firstItem} ... {spans} ... {lastItem} */}
            <PaginationButton
                text="Beginning"
                target={1}
                currentPageNum={currentPageNumber}
                lastPageNum={totalPagesCount}
            />
            <PaginationButton
                text="Previous"
                target="previous"
                currentPageNum={currentPageNumber}
                lastPageNum={totalPagesCount}
            />
            {currentPageNumber}
            <PaginationButton
                text="Next"
                target="next"
                currentPageNum={currentPageNumber}
                lastPageNum={totalPagesCount}
            />

            <PaginationButton
                text="End"
                target="end"
                currentPageNum={currentPageNumber}
                lastPageNum={totalPagesCount}
            />
        </div>
    );
};

export default Pagination;
