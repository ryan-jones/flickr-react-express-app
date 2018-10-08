import * as React from 'react';

const pageTracker = (props: { page: number, pages: number }) => {
  return (
    <div>
      <p className="my-2">Page {props.page} of {props.pages}</p>
    </div>

  )
}

export default pageTracker;