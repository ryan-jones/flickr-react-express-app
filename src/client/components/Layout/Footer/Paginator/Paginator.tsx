import * as React from 'react';
import { IPaginatorProps } from './Paginator.container';
import './Paginator.scss';


class Paginator extends React.Component<IPaginatorProps> {

  public onClickPage = (tags: string, perPage: number, pageNumber: number) => {
    this.props.fetchPhotos(tags, perPage, pageNumber);
  }

  public setToActive = (page: number, index: number) => {
    return page === index + 1 ? 'page-item active' : 'page-item';
  }

  public setToDisabled = (page: number, pages: number, buttonName: string) => {
    let className = 'page-item';
    switch(buttonName) {
      case 'previous':
        return page <= 1 ? className += ' disabled' : className;
      case 'next':
        return page >= pages ? className += ' disabled' : className;
      default:
        return className;
    }
  }

  public setPagesToDisplay = (page: number, pages: number): number[] => {
    switch(page) {
      case 1:
        return [page, page + 1, page + 2];
      case pages -1:
        return [page - 1, page];
      default:
        return [page - 1, page, page + 1];
    }
  }

  public setPaginatedValues = () => {
    const { imageState: { page, pages, perPage, tags}} = this.props;
    const pagesToDisplay = this.setPagesToDisplay(page, pages);

    return pagesToDisplay.map((pageNumber: number, index: number) => (
      <li
        onClick={() => this.onClickPage(tags, perPage, pageNumber)}
        key={index}
        className={this.setToActive(page, index)}>
        <a className="page-link" href="#">{pageNumber}</a>
      </li>
    ))
  }

  public render() {
    const { imageState: { page, pages, perPage, tags}} = this.props;

    return (
      <div className="text-xs-center py-2">
        <ul className="pagination">
          <li 
            onClick={() => this.onClickPage(tags, perPage, page - 1)}
            className={this.setToDisabled(page, pages, 'previous')}
            >
            <a className="page-link" href="#">Previous</a>
          </li>
          {this.setPaginatedValues()}
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