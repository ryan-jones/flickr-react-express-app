import * as React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ILayoutStateProps } from "./Layout.interfaces";

interface IProps extends ILayoutStateProps {
  children: any;
}

export default function Layout({ children, images }: IProps) {
  return (
    <div className='container-fluid p-0'>
      <Header />
      {children}
      <Footer {...images} />
    </div>
  );
}
