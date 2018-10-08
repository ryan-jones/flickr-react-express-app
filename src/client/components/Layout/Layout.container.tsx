import { connect } from 'react-redux';
import Layout from './Layout';
import { ILayoutStateProps, ILayoutState } from './Layout.interfaces';

const mapStateToProps = (state: ILayoutState): ILayoutStateProps => ({
  images: state.images,
});

export default connect(mapStateToProps)(Layout)