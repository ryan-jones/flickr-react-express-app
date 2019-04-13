import Paginator from "./Paginator";

import { connect } from "react-redux";
import { fetchPhotos } from "store/actions/photos.actions";
import { ImagesData } from "components/Gallery/Gallery.interfaces";

export interface IPaginatorDispatchProps {
  fetchPhotos: (tags: string, perPage: number, page: number) => void;
}

export interface IPaginatorStateProps {
  imageState: ImagesData;
}

export interface IPaginatorProps
  extends IPaginatorDispatchProps,
    IPaginatorStateProps {}

const mapStateToProps = (state: any): IPaginatorStateProps => ({
  imageState: state.images
});

const mapDispatchToProps: IPaginatorDispatchProps = {
  fetchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);
