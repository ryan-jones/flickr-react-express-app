import * as React from 'react';
import Paginator from './Paginator/Paginator.container';
import PageTracker from './PageTracker/PageTracker';
import './Footer.scss';

const footer = (props: { page: number, pages: number }) => {

  return (
    <div className="footer py-2">
      <Paginator />
      <PageTracker page={props.page} pages={props.pages} />
    </div>
  )
}

export default footer