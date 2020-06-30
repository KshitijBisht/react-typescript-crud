import Home from '../Home'
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import shallowToJson from 'enzyme-to-json';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const history = createMemoryHistory();
const path = `/route/:id`;

const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};

const location = createLocation(match.url);

Enzyme.configure({ adapter: new Adapter() });

describe('<Home/>',()=>{
    const wrapper= shallow(<Home history={history} location={location} match={match}/>);
    it('should be defined',()=>{
    expect(wrapper).toBeDefined();
    })
  
    it('should match the snapshot', () => {
          expect(shallowToJson(wrapper)).toMatchSnapshot();
      });

    //   it('should render deleteCustomer icon',()=>{
    //       const component = shallow(<Home history={history} location={location} match={match}/>)
    //       const instance = component.instance();
    //       instance.deleteCustomer();
    //   });.
  });