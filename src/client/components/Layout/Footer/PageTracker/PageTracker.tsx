import * as React from "react";

interface Props {
  page: number;
  pages: number;
}
const pageTracker = ({ page, pages }: Props) => (
  <div>
    <p className='my-2'>
      Page {page} of {pages}
    </p>
  </div>
);

export default pageTracker;
