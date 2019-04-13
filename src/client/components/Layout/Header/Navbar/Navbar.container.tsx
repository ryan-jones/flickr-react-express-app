import { connect } from "react-redux";
import Navbar from "./Navbar";
import { fetchPhotos } from "store/actions/photos.actions";
import {
  INavbarState,
  INavbarStateProps,
  INavBarDispatchProps
} from "./Navbar.interfaces";

const mapStateToProps = (state: INavbarState): INavbarStateProps => ({
  images: state.images
});

const mapDispatchToProps: INavBarDispatchProps = {
  fetchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
