import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import Header from './header';
import Footer from './footer';
import Home from './home';
import Create from './create';
import Search from './search';

import './App.css';

//import Auth from 'aws-amplify';
//import awsconfig from './aws-exports';
//import { withAuthenticator } from 'aws-amplify-react';

//Auth.configure(awsconfig);

const App = () => (
  <MemoryRouter>
    <Header/>
    <br/>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h2>
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button style={{ backgroundColor: '#ffffff' }}>Home</Button>
            </LinkContainer>
            <LinkContainer to="/create">
              <Button>Create</Button>
            </LinkContainer>
            <LinkContainer to="/search">
              <Button>Search</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
        <div>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Container>
    </Container>
    <Footer/>
  </MemoryRouter>
);

//export default withAuthenticator(App);
export default App;
