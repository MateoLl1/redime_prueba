import { Pagination } from 'react-bootstrap';

interface Props {
  meta: any;
  onPageChange: (page: number) => void;
}

export const AppPagination = ({ meta, onPageChange }: Props) => {
  if (!meta?.last_page) return null;

  const pages = Array.from({ length: meta.last_page }, (_, i) => i + 1);

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>
        {pages.map(page => (
          <Pagination.Item
            key={page}
            active={page === meta.current_page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
