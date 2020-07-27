import Create from '../Create'
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import shallowToJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter() });

describe('<Create/>',()=>{
  const initialState = {customer:{data:[]}}
  const mockStore = configureStore();
  const store = mockStore(initialState);

    const wrapper= shallow(<Create/>);
  
    it('should be defined',()=>{
    expect(wrapper).toBeDefined();
    })
  
    it('should match the snapshot', () => {
          expect(shallowToJson(wrapper)).toMatchSnapshot();
      });
    it('renders the Create',()=>{
      const processFormSubmission = jest.fn()
        const wrapper = mount(
          <Provider store={store}>
          <Router>
        <Create />
        </Router>
        </Provider>
        );
        console.log(wrapper.html());
        const push = jest.fn();
        wrapper.setProps({ history: { push } });

        
        wrapper.update()
        expect(wrapper.find(Create).length).toEqual(1);
        wrapper.update()
        
        wrapper.find('#create-post-form').simulate('submit', {
        preventDefault: () => {}});
    });  
  });