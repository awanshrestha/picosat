import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Myheader from './components/myheader';
import Sidenav from './components/sidenav';
import MainContent from './components/maincontent';

function App(){
    return (
      <Router>
        <>
          <Layout >
            <Myheader/>
            <Layout>
              <Sidenav/>
              <MainContent/>
            </Layout>
          </Layout>
        </>
      </Router>
    );
}
export default App;
