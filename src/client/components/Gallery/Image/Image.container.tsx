import { ImageState, ImageStateProps, IPhotoDispatchProps } from './Image.interfaces';
import { fetchUser } from '../../../store/actions/user.actions';
import { connect } from 'react-redux';
import Image from '../Image/Image';


const mapStateToProps = (state: ImageState): ImageStateProps => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any): IPhotoDispatchProps => ({
  fetchUser: (id: string) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);