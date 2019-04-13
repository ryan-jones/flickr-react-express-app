import * as React from "react";
import Overlay from "./Overlay/Overlay";
import "./Image.scss";
import { ImageProps } from "./Image.interfaces";

export default function Image({
  photo,
  user,
  fetchUser,
  resetUser,
  activateModal,
  setSelectedPhoto
}: ImageProps) {
  const [scrolledOver, setIfScrolledOver] = React.useState(false);

  React.useEffect(() => {
    scrolledOver ? fetchUser(photo.owner) : resetUser();
  }, [scrolledOver]);

  const onMouseClick = () => {
    setSelectedPhoto(photo);
    activateModal();
  };

  return (
    <div className='image-container col-sm-12 col-md-4 col-lg-3 py-2'>
      <div
        onMouseEnter={() => setIfScrolledOver(true)}
        onMouseLeave={() => setIfScrolledOver(false)}
        onClick={() => onMouseClick()}
        className='photo-box row'
      >
        <img className='img-fluid' src={photo.url} />
        {scrolledOver && <Overlay owner={user.realName || user.userName} />}
      </div>
      <p className='my-3'>{photo.title}</p>
    </div>
  );
}
