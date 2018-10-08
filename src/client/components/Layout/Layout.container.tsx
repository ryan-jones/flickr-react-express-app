import { connect } from 'react-redux';
import Layout from './Layout';
import { ILayoutStateProps, ILayoutState } from './Layout.interfaces';

const mapStateToProps = (state: ILayoutState): ILayoutStateProps => ({
  pages: state.images.pages,
  page: state.images.page
});

export default connect(mapStateToProps)(Layout)