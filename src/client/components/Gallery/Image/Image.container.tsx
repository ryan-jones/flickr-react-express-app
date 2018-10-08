import { ImageState, ImageStateProps, IPhotoDispatchProps } from './Image.interfaces';
import { fetchUser } from '../../../store/actions/user.actions';
import { connect } from 'react-redux';
import Image from '../Image/Image';
import { activateModal } from '../../../store/actions/modal.actions';
import { setSelectedPhoto } from '../../../store/actions/photos.actions';
import { IPhoto } from '../Gallery.interfaces';


const mapStateToProps = (state: ImageState): ImageStateProps => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any): IPhotoDispatchProps => ({
  fetchUser: (id: string) => dispatch(fetchUser(id)),
  openModal: () => dispatch(activateModal()),
  setSelectedPhoto: (photo: IPhoto) => dispatch(setSelectedPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);