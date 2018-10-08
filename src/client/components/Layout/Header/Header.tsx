import * as React from 'react';
import Navbar from './Navbar/Navbar';
import { ILayoutProps } from '../Layout.interfaces';
import './Header.scss';

export default class Header extends React.Component<ILayoutProps> {

  public render() {
    const { page, pages } = this.props;
    return (
      <header className="py-2">
        <Navbar page={page} pages={pages}/>
      </header>
    )
  }
}