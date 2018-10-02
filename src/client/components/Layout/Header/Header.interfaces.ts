


export interface IHeaderProps extends IHeaderStateProps, IHeaderDispatchProps {}

export interface IHeaderStateProps {
  isDesktop: boolean;
  hideHeader: boolean;
}

export interface IHeaderDispatchProps {
  closeMenu: () => void;
}

export interface IHeaderState {
  isDesktop: boolean;
  hideHeader: boolean;
}