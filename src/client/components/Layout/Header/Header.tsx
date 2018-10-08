import * as React from 'react';
import Navbar from './Navbar/Navbar.container';
import './Header.scss';

const header = () => {
  return (
    <header className="py-2">
      <Navbar />
    </header>
  )
}

export default header;