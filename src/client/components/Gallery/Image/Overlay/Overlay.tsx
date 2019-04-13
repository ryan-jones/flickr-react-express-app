import * as React from "react";
import "./Overlay.scss";

const overlay = (props: { owner: string }) => (
  <div className='photo-box-overlay'>
    <p>{props.owner || "fetching..."}</p>
  </div>
);

export default overlay;
