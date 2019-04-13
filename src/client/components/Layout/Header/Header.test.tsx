import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import NavbarContainer from './Navbar/Navbar.container';
import Header from './Header';
configure({ adapter: new Adapter()});

describe('<Header />', () => {
  it('should render the <Navbar />', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find(NavbarContainer)).toHaveLength(1);
  });
});
