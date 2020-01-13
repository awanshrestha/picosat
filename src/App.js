import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Myheader from './components/layout/myheader';
import Sidenav from './components/layout/sidenav';
import MainContent from './components/layout/maincontent';
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
