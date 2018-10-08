import * as React from 'react';
import { IPaginatorProps } from './Paginator.container';
import './Paginator.scss';


class Paginator extends React.Component<IPaginatorProps> {

  public setPagesToDisplay = (page: number, pages: number): number[] => {
    if (page === 1) {
      return [page, page + 1, page + 2];
    }
    if (page === pages - 1) {
      return [page - 1, page]
    }
    return [page - 1, page, page + 1];
  }

  public setToDisabled = (page: number, pages: number, buttonName: string) => {
    let className = 'page-item';
    if (buttonName === 'previous') {
      return page <= 1 ? className += 'disabled' : className;
    }
    if (buttonName === 'next') {
      return page >= pages ? className += 'disabled' : className;
    }
    return className;
  }

  public setToActive = (page: number, index: number) => {
    return page === index + 1 ? 'page-item active' : 'page-item';
  }

  public onClickPage = (tags: string, perPage: number, pageNumber: number) => {
    this.props.fetchPhotos(tags, perPage, pageNumber);
  }

  public render() {
    const { imageState: { page, pages, perPage, tags}} = this.props;
    const pagesToDisplay = this.setPagesToDisplay(page, pages);
    return (
      <div className="text-xs-center py-2">
        <ul className="pagination">
          <li 
            onClick={() => this.onClickPage(tags, perPage, page - 1)}
            className={this.setToDisabled(page, pages, 'previous')}
            >
            <a className="page-link" href="#">Previous</a>
          </li>
          {
            pagesToDisplay.map((pageNumber: number, index: number) => (
              <li
                onClick={() => this.onClickPage(tags, perPage, pageNumber)}
                key={index}
                className={this.setToActive(page, index)}>
                <a className="page-link" href="#">{pageNumber}</a>
              </li>
            ))
          }
          <li  
            onClick={() => this.onClickPage(tags, perPage, page + 1)} 
            className={this.setToDisabled(page, pages, 'next')}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </div>
    )
  }

}

export default Paginator;