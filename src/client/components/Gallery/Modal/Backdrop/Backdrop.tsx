import * as React from 'react';
import './Backdrop.scss';

export interface IBackdropProps {
  show: boolean;
  dismissed: () => void;
  children?: any;
}

const backdrop = (props: IBackdropProps) => (
  props.show
    ? <div onClick={props.dismissed} className='Backdrop'>{props.children}</div>
    : null
)

export default backdrop;