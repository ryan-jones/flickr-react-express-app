import * as React from 'react';
import TopHeader from './TopHeader/TopHeader';
import './Header.scss';

export default class Header extends React.Component<any> {

  public renderNavbar = () => {
    return <p>Search Bar</p>
  }
  public render() {
    return (
      <header>
        <TopHeader />
        {this.renderNavbar()}
        {this.props.children}
      </header>
    )
  }
}