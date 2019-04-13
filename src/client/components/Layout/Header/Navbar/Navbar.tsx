import * as React from "react";
import "./Navbar.scss";
import { DebounceInput } from "react-debounce-input";
import { INavbarProps } from "./Navbar.interfaces";

export default function navbar({ images, fetchPhotos }: INavbarProps) {
  const [searchInput, setSearchInput] = React.useState("");

  const logo = require("assets/images/flickr.svg");

  React.useEffect(() => {
    const { perPage } = images;
    fetchPhotos(searchInput, perPage, 1);
  }, [searchInput]);

  return (
    <nav className='navbar navbar-default navbar-fixed-top navbar-expand-md navbar-light'>
      <a className='navbar-brand' href='#'>
        <img src={logo} />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <h3 className='mx-3'>Browse images for {searchInput || "Taichung"}</h3>

        <form className='form-inline my-2 my-lg-0'>
          <div className='input-group mx-2'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='image-search'>
                🔎
              </span>
            </div>
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              onChange={e => setSearchInput(e.target.value)}
              className='form-control'
              placeholder='Or search for...'
              value={searchInput}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
