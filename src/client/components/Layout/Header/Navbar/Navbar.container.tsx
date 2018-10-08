import { connect } from 'react-redux';
import Navbar from './Navbar';
import { fetchPhotos } from '../../../../store/actions/photos.actions';
import { ImagesData } from '../../../Gallery/Gallery.interfaces';

export interface INavbarState {
  images: ImagesData;
}

export interface INavbarStateProps extends INavbarState {}

export interface INavBarDispatchProps {
  fetchPhotos: any
}

export interface INavbarProps extends INavBarDispatchProps, INavbarStateProps {}

const mapStateToProps = (state: INavbarState): INavbarStateProps => ({
  images: state.images,
});

const mapDispatchToProps = (dispatch: any): INavBarDispatchProps => ({
  fetchPhotos: (tags: string, perPage: number, page: number) => dispatch(fetchPhotos(tags, perPage, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)