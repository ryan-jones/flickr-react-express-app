
import Gallery from './Gallery';
import { IGalleryState, IGalleryStateProps, IGalleryDispatchProps } from './Gallery.interfaces';
import { fetchPhotos } from '../../store/actions/photos.actions';
import { connect } from 'react-redux';
import { activateModal, closeModal } from '../../store/actions/modal.actions';

const mapStateToProps = (state: IGalleryState): IGalleryStateProps => ({
  images: state.images,
  user: state.user,
  loading: state.loading,
  modalActive: state.modal.modalActive
});

const mapDispatchToProps = (dispatch: any): IGalleryDispatchProps => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page)),
  openModal: () => dispatch(activateModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
