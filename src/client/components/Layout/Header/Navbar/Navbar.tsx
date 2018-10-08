import * as React from 'react';
import './Navbar.scss';

const navbar = (props: { page: number, pages: number }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <a className="navbar-brand" href="#">
      Flickr
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group mx-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="image-search">@</span>
            </div>
            <input type="text" className="form-control" placeholder="Search For..." aria-label="image-search" aria-describedby="image-search" />
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search for images</button>
        </form>
      </div>
    </nav>
  )
}

export default navbar