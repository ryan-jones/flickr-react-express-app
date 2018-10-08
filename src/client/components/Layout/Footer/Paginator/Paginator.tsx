import * as React from 'react';
import './Paginator.scss';

const setPagesToDisplay = (props: { page: number, pages: number }): number[] => {
  const { page, pages } = props;
  if (page === 0) {
    return [page, page + 1];
  }
  if (page === pages - 1) {
    return [page - 1, page]
  }
  return [page - 1, page, page + 1];
}


const paginator = (props: { page: number, pages: number }) => {

  const pagesToDisplay = setPagesToDisplay(props);
  return (
    <div className="text-xs-center py-2">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        {
          pagesToDisplay.map((pageNumber: number, index: number) => (
            <li key={index} className="page-item"><a className="page-link" href="#">{pageNumber}</a></li>
          ))
        }
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </div>

  )
}

export default paginator;