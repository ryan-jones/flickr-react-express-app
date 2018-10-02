import * as React from 'react';
import { ImageProps } from '../../../interfaces/photos.interface';
import Overlay from './Overlay/Overlay';

import './Image.scss';

class Image extends React.Component<ImageProps> {
  
  public state = {
    scrolledOver: false
  }

  public onMouseEnter = () => {
    this.setState({ scrolledOver: true });
  }

  public onMouseLeave = () => {
    this.setState({ scrolledOver: false });
  }

  public render() {
    const { photo } = this.props;
    return (
      <div className="image-container">
        <div 
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className='photo-box'
        >
          <img src={photo.url} />
          {this.state.scrolledOver ? (<Overlay owner={photo.owner}/>) : null }
        </div>
       
        <p>{photo.title}</p>
      </div>
    )
  }
}

export default Image;
