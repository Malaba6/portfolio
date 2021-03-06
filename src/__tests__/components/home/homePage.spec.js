import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../components/home/homePage';
import NavBar from '../../../components/home/navBar';
import Me from '../../../components/home/me';
import { Skills } from '../../../components/home/skills';
import { Contacts } from '../../../components/home/contacts';

describe('Should render <HomePage />', () => {
  let wrapper = shallow(<HomePage />);
  it('It should render home page content', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should call the NavBar component', () => {
    const ref = {
      current: {
        offsetTop: 244
      }
    };
    expect(wrapper.find(NavBar).length).toBe(1);
    wrapper.find(NavBar).prop('scrollToSection')(ref);
  });
  it('should call the Skills component', () => {
    expect(wrapper.find(Me).length).toBe(1);
  });
  it('should call the Me component', () => {
    const setCurrentRef = jest.fn();
    const handleRefChange = jest.spyOn(React, 'useState');
    handleRefChange
      .mockImplementation(currentRef => [currentRef, setCurrentRef]);
  });
  it('should call the <Skills /> component', () => {
    expect(wrapper.find(Skills).length).toBe(1);
  });
  it('should call the <Contacs /> component', () => {
    expect(wrapper.find(Contacts).length).toBe(1);
  });
});
