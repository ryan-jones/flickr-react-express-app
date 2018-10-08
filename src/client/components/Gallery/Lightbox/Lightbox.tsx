import * as React from 'react';
import { IUser, IPhoto } from '../Gallery.interfaces';
import './Lightbox.scss';
import Overlay from '../Image/Overlay/Overlay';

interface ILightboxProps {
  photo?: IPhoto;
  user: IUser;
}

export interface IUser {
  description: string;
  location: string;
  realName: string;
  userName: string;
  profileUrl: string;
}

class Lightbox extends React.Component<ILightboxProps> {

  public state = {
    scrolledOver: false,
  }

  public onMouseEnter = () => {
    this.setState({ scrolledOver: true });
  }

  public onMouseLeave = () => {
    this.setState({ scrolledOver: false });
  }

  public setRealName = (user: IUser) => {
    return user.realName
      ? user.realName
      : '...maybe Ryan?'
  }
  
  public setLocation = (user: IUser) => {
    return user.location
      ? user.location
      : 'Earth'
  }

  public render() {
    const { user } = this.props;
    return (
      <div className="lightbox-container">
        <div className="user-name row mx-3">
          <h2>{user.userName}</h2>
        </div>
        <div className="lightbox-image row">
          <div 
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            className="col-12 px-3">
            <img className="img-fluid" src={this.props.photo ? this.props.photo.url : ''} />
            {this.state.scrolledOver && (<Overlay owner={user.description}/>)}
          </div>
        </div>
        <div className="lightbox-content my-3">
          <div className="user-overview row">
            <p className="col-xs-12 col-md-6">Real name: <i>{this.setRealName(user)}</i></p>
            <p className="col-xs-12 col-md-6">Location: <i>{this.setLocation(user)}</i></p>
          </div>
          <div className="user-description row">
            <div className="col-12">
              <button className="btn"><a target="_blank" href={user.profileUrl}>{user.realName}'s Profile</a></button>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
  
}

export default Lightbox;