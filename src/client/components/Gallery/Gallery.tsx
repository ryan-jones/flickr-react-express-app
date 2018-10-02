import * as React from 'react';
import { IPhoto } from '../../interfaces/photos.interface';
import Image from '../Gallery/Image/Image';
import { IGalleryProps } from './Gallery.interfaces';
import './Gallery.scss';

export default class Gallery extends React.Component<IGalleryProps> {

  public componentDidMount() {
    this.props.fetchPhotos('dogs', 15, 1);
  }

  public render() {
    const { images } = this.props;
    return (
      <section className="gallery-container">
        {
          images.photos.length
            ? this.props.images.photos.map((photo: IPhoto, index: number) => {
              return (<Image key={index} photo={photo} index={index} />)
            })
            : <p>...Loading</p>
        }
      </section>

    )
  }
}