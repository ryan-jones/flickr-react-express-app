import * as React from 'react';
import './Overlay.scss';

const overlay = (props: { owner: string }) => {
  return (
    <div className="photo-box-overlay">
      <p>{props.owner}</p>
    </div>
  )
}

export default overlay;