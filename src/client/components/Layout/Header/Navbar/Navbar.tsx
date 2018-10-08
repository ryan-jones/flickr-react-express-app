import * as React from 'react';
import './Navbar.scss';
import { INavbarProps } from './Navbar.container';
import { DebounceInput } from 'react-debounce-input';

class Navbar extends React.Component<INavbarProps> {

  public state = {
    searchInput: ''
  }
  
  public logo = require('src/assets/images/flickr.svg');

  public onChangeHandler = (event: React.SyntheticEvent) => {
    const tag = (event.target as HTMLInputElement).value;
    const { perPage } = this.props.images;
    this.setState({ searchInput: tag });
    this.props.fetchPhotos(tag, perPage, 1);
  };


  public render() {
    return (
      <nav className="navbar navbar-default navbar-static-top navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#">
          <img src={this.logo} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group mx-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="image-search">
                  <span className="glyphicon glyphicon-search"></span>
                </span>
              </div>
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={(e) => this.onChangeHandler(e)}
                className="form-control"
                placeholder="Search For..."
                value={this.state.searchInput}
              />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}


export default Navbar