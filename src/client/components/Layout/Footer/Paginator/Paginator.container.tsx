import Paginator from './Paginator';

import { connect } from 'react-redux';
import { fetchPhotos } from '../../../../store/actions/photos.actions';
import { ImagesData } from '../../../Gallery/Gallery.interfaces';

export interface IPaginatorDispatchProps {
  fetchPhotos: (tags: string, perPage: number, page: number) => void;
}

export interface IPaginatorStateProps {
  imageState: ImagesData;
}

export interface IPaginatorProps extends IPaginatorDispatchProps, IPaginatorStateProps {}

const mapStateToProps = (state: { images: ImagesData}): IPaginatorStateProps => ({
  imageState: state.images
})

const mapDispatchToProps = (dispatch: any): IPaginatorDispatchProps => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)