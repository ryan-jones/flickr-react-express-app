import * as React from 'react';

export const message = (props: { message: string }) => {
  return (<p className="gallery-container-message">{props.message}</p>)
}

export default message;