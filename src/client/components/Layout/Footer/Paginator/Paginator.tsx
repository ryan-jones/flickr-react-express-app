import * as React from "react";
import { IPaginatorProps } from "./Paginator.container";
import "./Paginator.scss";

const paginator = ({ imageState, fetchPhotos }: IPaginatorProps) => {
  const { page, pages, tags, perPage } = imageState;

  const onClickPage = (pageNumber: number, title?: string) => {
    if (!title || !disableButton(title)) {
      fetchPhotos(tags, perPage, pageNumber);
    }
  };

  const setToActive = (index: number) => {
    return page === index + 1 ? "page-item active" : "page-item";
  };

  const setToDisabled = (buttonName: string) => {
    let className = "page-item";
    switch (buttonName) {
      case "previous":
        return page <= 1 ? (className += " disabled") : className;
      case "next":
        return page >= pages ? (className += " disabled") : className;
      default:
        return className;
    }
  };

  const disableButton = (buttonName: string) => {
    switch (buttonName) {
      case "previous":
        return page <= 1;
      case "next":
        return page >= pages;
      default:
        return false;
    }
  };

  const setPagesToDisplay = (): number[] => {
    switch (page) {
      case 1:
        return [page, page + 1, page + 2];
      case pages - 1:
        return [page - 1, page];
      default:
        return [page - 1, page, page + 1];
    }
  };

  const setPaginatedValues = () => {
    return setPagesToDisplay().map((pageNumber: number, index: number) =>
      listItem(pageNumber, "", index)
    );
  };

  const listItem = (pageNumber: number, title: string, index?: number) => (
    <li
      onClick={() => onClickPage(pageNumber, title)}
      key={index}
      className={index ? setToActive(index) : setToDisabled(title)}
    >
      <a className='page-link' href='/'>
        {index || index === 0
          ? pageNumber
          : `${title.charAt(0).toUpperCase()}${title.slice(1)}`}
      </a>
    </li>
  );

  return (
    <div className='text-xs-center py-2'>
      <ul className='pagination'>
        {listItem(page - 1, "previous")}
        {setPaginatedValues()}
        {listItem(page + 1, "next")}
      </ul>
    </div>
  );
};

export default paginator;
