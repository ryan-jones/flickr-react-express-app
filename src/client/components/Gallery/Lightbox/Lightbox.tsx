import * as React from 'react';
import { IUser } from '../Gallery.interfaces';
import './Lightbox.scss';
import { ILightboxProps } from './Lightbox.interfaces';



class Lightbox extends React.Component<ILightboxProps> {

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
          <div className="col-12 px-3">
            <img className="img-fluid" src={this.props.photo ? this.props.photo.url : ''} />
          </div>
        </div>
        <div className="lightbox-content my-3">
          <div className="user-description row">
            <div className="col-12">
              <p><i>{user.description}</i></p>
            </div>
          </div>
          <div className="user-overview row">
            <p className="col-xs-12 col-md-6">Real name: <i>{this.setRealName(user)}</i></p>
            <p className="col-xs-12 col-md-6">Location: <i>{this.setLocation(user)}</i></p>
          </div>
          <div className="user-profile row">
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