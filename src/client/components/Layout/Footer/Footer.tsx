import * as React from "react";
import Paginator from "./Paginator/Paginator.container";
import PageTracker from "./PageTracker/PageTracker";
import "./Footer.scss";

const footer = (props: { page: number; pages: number }) => (
  <div className='footer py-2'>
    <Paginator />
    <PageTracker {...props} />
  </div>
);

export default footer;
