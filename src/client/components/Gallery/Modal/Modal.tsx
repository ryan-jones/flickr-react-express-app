import * as React from "react";
import Backdrop from "./Backdrop/Backdrop";
import "./Modal.scss";

interface IModalProps {
  show: boolean;
  children: any;
  modalClosed: () => void;
}

export default function modal({ show, children, modalClosed }: IModalProps) {
  const styles = {
    opacity: show ? 1 : 0,
    transform: show ? "scale(1)" : "scale(0)"
  };
  return (
    <React.Fragment>
      {show && <Backdrop dismissed={modalClosed} />}
      <div className='Modal' style={styles}>
        {children}
      </div>
    </React.Fragment>
  );
}
