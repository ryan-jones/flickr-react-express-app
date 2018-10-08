import * as React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.container';
import Gallery from './components/Gallery/Gallery.container';

class App extends React.Component<any> {

  public render() {
    return (
      <div className="App">
        <Layout>
          <Gallery />
        </Layout>
      </div>
    );
  }
}

export default App;