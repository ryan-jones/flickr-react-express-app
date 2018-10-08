import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
export default class Layout extends React.Component<any> {

  public render() {
    const { page, pages } = this.props;
    return (
      <div className="container-fluid p-0">
        <Header page={page} pages={pages} />
        {this.props.children}
        <Footer page={page} pages={pages} />
      </div>

    )
  }
}