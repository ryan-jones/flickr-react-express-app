import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default class Layout extends React.Component<any> {

  public render() {
    return (
      <div className="main-layout-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>

    )
  }
}