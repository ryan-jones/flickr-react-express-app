import { connect } from 'react-redux';
import Navbar from './Navbar';
import { fetchPhotos } from '../../../../store/actions/photos.actions';
import { INavbarState, INavbarStateProps, INavBarDispatchProps } from './Navbar.interfaces';

const mapStateToProps = (state: INavbarState): INavbarStateProps => ({
  images: state.images,
});

const mapDispatchToProps = (dispatch: any): INavBarDispatchProps => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)