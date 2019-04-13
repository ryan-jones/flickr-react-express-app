import * as React from "react";
import Image from "../Gallery/Image/Image.container";
import { IGalleryProps, IPhoto } from "./Gallery.interfaces";
import Modal from "./Modal/Modal";
import Lightbox from "./Lightbox/Lightbox";
import Message from "./Message/Message";
import "./Gallery.scss";

export default function gallery({
  images,
  user,
  modalActive,
  loading,
  fetchPhotos,
  closeModal
}: IGalleryProps) {
  React.useEffect(() => {
    fetchPhotos("taichung", 8, 1);
  }, []);

  const setGalleryDisplay = () => {
    const { photos } = images;
    return photos && Boolean(photos.length) ? (
      photos.map((photo: IPhoto, index: number) => (
        <Image key={index} photo={photo} />
      ))
    ) : (
      <Message message='No photos were found!' />
    );
  };

  const checkForErrorsAndDisplay = () => {
    return images.error ? (
      <Message message={images.error} />
    ) : (
      setGalleryDisplay()
    );
  };

  return (
    <section className='gallery-container row mx-3 my-2'>
      <Modal show={modalActive} modalClosed={closeModal}>
        <Lightbox user={user} photo={images.selectedPhoto} />
      </Modal>
      {loading ? <Message message='...Loading' /> : checkForErrorsAndDisplay()}
    </section>
  );
}
