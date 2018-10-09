import * as React from 'react';
import Image from '../Gallery/Image/Image.container';
import { IGalleryProps, IPhoto, ImagesData } from './Gallery.interfaces';
import Modal from './Modal/Modal';
import Lightbox from './Lightbox/Lightbox';
import Message from './Message/Message';
import './Gallery.scss';

export default class Gallery extends React.Component<IGalleryProps> {

  public componentDidMount() {
    this.props.fetchPhotos('taichung', 8, 1);
  }

  public setGalleryDisplay = (images: ImagesData) => {
    return images.photos && images.photos.length
      ? images.photos.map((photo: IPhoto, index: number) => {
        return (<Image key={index} photo={photo} />)
      })
      : <Message message="No photos were found!" />
  };

  public checkForErrorsAndDisplay = (images: ImagesData) => {
    return images.error
      ? <Message message={images.error} />
      : this.setGalleryDisplay(images)
  }

  public onCloseModal = () => this.props.closeModal();

  public render() {
    const { images, user, modalActive, loading } = this.props;
    return (
      <section className="gallery-container row mx-3 my-2">
        <Modal show={modalActive} modalClosed={this.onCloseModal}>
          <Lightbox user={user} photo={images.selectedPhoto} />
        </Modal>
        {
          loading
            ? <Message message="...Loading" />
            : this.checkForErrorsAndDisplay(images)
        }
      </section>
    )
  }
}