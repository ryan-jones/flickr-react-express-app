import * as React from 'react';
import Overlay from './Overlay/Overlay';
import './Image.scss';
import { ImageProps } from './Image.interfaces';

export default class Image extends React.Component<ImageProps> {
  
  public state = {
    scrolledOver: false
  }

  public onMouseEnter = (photo: any) => {
    this.props.fetchUser(photo.owner);
    this.setState({ scrolledOver: true });
  }

  public onMouseLeave = () => {
    this.setState({ scrolledOver: false });
  }

  public render() {
    const { photo, user: { realName } }= this.props;
    return (
      <div className="image-container">
        <div 
          onMouseEnter={() => this.onMouseEnter(photo)}
          onMouseLeave={this.onMouseLeave}
          className='photo-box'
        >
          <img src={photo.url} />
          {this.state.scrolledOver ? (<Overlay owner={realName}/>) : null }
        </div>
       
        <p>{photo.title}</p>
      </div>
    )
  }
}


