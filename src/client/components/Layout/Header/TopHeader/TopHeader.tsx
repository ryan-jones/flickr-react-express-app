import * as React from 'react';
import './TopHeader.scss';

// interface IPropTypes {
//   handleReload: () => void;
// }
export default class TopHeader extends React.PureComponent<any> {

  public render() {
    return (
      <section className="top-header">
        <div className="centered-layout">
          <p>Flickr Logo</p>
          <h3>Flickr Gallery</h3>
        </div>
      </section>
    )
  }
}