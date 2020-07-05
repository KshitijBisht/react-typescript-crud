import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/customer/Create';
import EditUser from './components/customer/Edit';
import {Provider} from 'react-redux';
import store from './store'

function App(RouteComponentProps: any) {
  
    return (
      <Provider store = {store}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/create'}> Create User </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          <Route path={'/edit/:id'} exact component={EditUser} />
        </Switch>
      </div>
      </Provider>
    );
  
}
export default withRouter(App);