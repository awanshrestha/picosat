import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Myheader from './components/myheader';
import Sidenav from './components/sidenav';
import MainContent from './components/maincontent';
import { Layout } from 'antd';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout >
            <Myheader/>
            <Layout>
              <Sidenav/>
              <MainContent/>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
