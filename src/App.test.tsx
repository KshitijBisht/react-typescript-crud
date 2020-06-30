import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import shallowToJson from 'enzyme-to-json';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
describe('<App/>',()=>{
  const wrapper= shallow(<App/>);

  it('should be defined',()=>{
  expect(wrapper).toBeDefined();
  })

  it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});