import * as React from 'react';
import Overlay from './Overlay/Overlay';
import './Image.scss';
import { ImageProps } from './Image.interfaces';
import { IPhoto } from '../Gallery.interfaces';

export default class Image extends React.Component<ImageProps> {
  
  public state = {
    scrolledOver: false,
  }

  public onMouseEnter = (photo: IPhoto) => {
    this.props.fetchUser(photo.owner);
    this.setState({ scrolledOver: true });
  }

  public onMouseLeave = () => {
    this.setState({ scrolledOver: false });
  }

  public onMouseClick = (photo: IPhoto) => {
    this.props.setSelectedPhoto(photo);
    this.props.openModal();
  }

  public render() {
    const { photo, user: { realName } }= this.props;
    return (
      <div className="image-container col-sm-12 col-md-4 col-lg-3 py-2">
        <div 
          onMouseEnter={() => this.onMouseEnter(photo)}
          onMouseLeave={this.onMouseLeave}
          onClick={() => this.onMouseClick(photo)}
          className='photo-box row'
        >
          <img className="img-fluid" src={photo.url} />
          {this.state.scrolledOver && (<Overlay owner={realName}/>) }
        </div>
        <p className="my-3">{photo.title}</p>
      </div>
    )
  }
}


