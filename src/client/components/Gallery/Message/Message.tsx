import * as React from "react";

export default function message(props: { message: string }) {
  return <p className='gallery-container-message'>{props.message}</p>;
}
