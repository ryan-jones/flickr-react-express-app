import * as React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { fetchPhotos } from './store/actions/photos.actions';
import { ImagesData, IPhoto } from './interfaces/photos.interface';

interface IAppState {
  images: ImagesData;
  loading: boolean;
}

interface IAppStateProps extends IAppState { }

class App extends React.Component<any> {

  public componentDidMount() {
    this.props.fetchPhotos('barcelona', 10, 1);
  }
  public render() {
    console.log(this.props.images)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          {this.props.images.photos.length 
            ? this.props.images.photos.map((photo: IPhoto, index: number) => {
              return (
              <div key={index}>
                <img src={photo.url} />
                <p>{photo.title}-{photo.owner}</p>
              </div>)
            })
          : <p>...Loading</p> }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IAppStateProps => ({
  images: state.images,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: any): any => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
