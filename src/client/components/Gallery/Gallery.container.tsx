import Gallery from "./Gallery";
import {
  IGalleryState,
  IGalleryStateProps,
  IGalleryDispatchProps
} from "./Gallery.interfaces";
import { fetchPhotos } from "store/actions/photos.actions";
import { connect } from "react-redux";
import { closeModal } from "store/actions/modal.actions";

const mapStateToProps = (state: IGalleryState): IGalleryStateProps => ({
  images: state.images,
  user: state.user,
  loading: state.loading.isLoading,
  modalActive: state.modal.modalActive
});

const mapDispatchToProps: IGalleryDispatchProps = {
  fetchPhotos,
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
