import Edit from '../Edit'
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import shallowToJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home/>',()=>{
    const wrapper= shallow(<Edit/>);
  
    it('should be defined',()=>{
    expect(wrapper).toBeDefined();
    })
  
    it('should match the snapshot', () => {
          expect(shallowToJson(wrapper)).toMatchSnapshot();
      });
  });