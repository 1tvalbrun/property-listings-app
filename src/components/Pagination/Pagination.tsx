import { PaginationProps } from './PaginationTypes';

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  // This is generating an array of page numbers based on the pageCount
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 p-2"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 p-2 ${
            currentPage === number ? 'text-blue-500' : ''
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className="mx-1 p-2"
      >
        Next
      </button>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
