import * as React from 'react';
import Image from '../Gallery/Image/Image.container';
import { IGalleryProps, IPhoto } from './Gallery.interfaces';
import Modal from './Modal/Modal';
import Lightbox from './Lightbox/Lightbox';

export default class Gallery extends React.Component<IGalleryProps> {

  public componentDidMount() {
    this.props.fetchPhotos('taichung', 12, 1);
  }

  public onCloseModal = () => this.props.closeModal();

  public render() {
    const { images, user, modalActive } = this.props;
    return (
      <section className="gallery-container row mx-3 my-2">
        <Modal show={modalActive} modalClosed={this.onCloseModal}>
					<Lightbox user={user} photo={images.selectedPhoto}/>
				</Modal>
        {
          images.photos && images.photos.length
            ? images.photos.map((photo: IPhoto, index: number) => {
              return (<Image key={index} photo={photo} />)
            })
            : <p>...Loading</p>
        }
      </section>

    )
  }
}