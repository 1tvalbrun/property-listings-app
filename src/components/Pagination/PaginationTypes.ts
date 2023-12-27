export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
