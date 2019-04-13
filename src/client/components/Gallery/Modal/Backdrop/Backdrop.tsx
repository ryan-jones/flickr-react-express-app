import * as React from "react";
import "./Backdrop.scss";

export interface IBackdropProps {
  dismissed: () => void;
  children?: any;
}

const backdrop = ({ children, dismissed }: IBackdropProps) => (
  <div onClick={dismissed} className='Backdrop'>
    {children}
  </div>
);

export default backdrop;
