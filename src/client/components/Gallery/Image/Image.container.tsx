import {
  ImageState,
  ImageStateProps,
  IPhotoDispatchProps
} from "./Image.interfaces";
import { fetchUser, resetUser } from "store/actions/user.actions";
import { connect } from "react-redux";
import Image from "../Image/Image";
import { activateModal } from "store/actions/modal.actions";
import { setSelectedPhoto } from "store/actions/photos.actions";

const mapStateToProps = (state: ImageState): ImageStateProps => ({
  user: state.user
});

const mapDispatchToProps: IPhotoDispatchProps = {
  fetchUser,
  resetUser,
  activateModal,
  setSelectedPhoto
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
