
import Gallery from './Gallery';
import { IGalleryState, IGalleryStateProps, IGalleryDispatchProps } from './Gallery.interfaces';
import { fetchPhotos } from '../../store/actions/photos.actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: IGalleryState): IGalleryStateProps => ({
  images: state.images,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any): IGalleryDispatchProps => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
