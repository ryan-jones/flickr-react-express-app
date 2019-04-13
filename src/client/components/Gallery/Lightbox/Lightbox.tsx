import * as React from "react";
import "./Lightbox.scss";
import { ILightboxProps } from "./Lightbox.interfaces";
import { abbreviateString } from "utils/index";
import { get } from "lodash";

export default function Lightbox({ user, photo }: ILightboxProps) {
  return (
    <div className='lightbox-container'>
      <div className='user-name row mx-3'>
        <h2>{user.userName}</h2>
      </div>
      <div className='lightbox-image row'>
        <div className='col-12 px-3'>
          <img className='img-fluid' src={get(photo, "url", "")} />
        </div>
      </div>
      <div className='lightbox-content my-3'>
        <div className='user-description row'>
          <div className='col-12'>
            <p>
              <i>{abbreviateString(user.description, 100)}</i>
            </p>
          </div>
        </div>
        <div className='user-overview row'>
          <p className='col-xs-12 col-md-6'>
            Real name: <i>{get(user, "realName", "...maybe Ryan?")}</i>
          </p>
          <p className='col-xs-12 col-md-6'>
            Location: <i>{get(user, "location", "Earth")}</i>
          </p>
        </div>
        <div className='user-profile row'>
          <div className='col-12'>
            {user.profileUrl && (
              <button className='btn'>
                <a target='_blank' href={user.profileUrl}>
                  {user.realName}'s Profile
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
