import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import NavigationBar from './components/navbar';
import Footer from './components/footer'
import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/profile" component={Home} />
              <Route path="/profile/about" component={About} />
              <Route path="/profile/contact" component={Contact} />
            </Switch>
          </Layout>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
