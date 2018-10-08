import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ILayoutStateProps } from './Layout.interfaces';

export default class Layout extends React.Component<ILayoutStateProps> {

  public render() {
    const { page, pages } = this.props.images;
    return (
      <div className="container-fluid p-0">
        <Header />
        {this.props.children}
        <Footer page={page} pages={pages} />
      </div>
    )
  }
}