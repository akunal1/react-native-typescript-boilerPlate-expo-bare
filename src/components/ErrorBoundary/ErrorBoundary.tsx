import React from 'react';
import { ErrorView } from './ErrorView';

interface Props {
  retry?: () => void;
  isError?: boolean;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    //TODO : log Error Here
  }

  _retry = () => {
    // Retry component error before props error
    if (this.state.hasError) {
      this.setState({ hasError: false });
    } else {
      this.props.retry && this.props.retry();
    }
  };

  render() {
    if (this.state.hasError || this.props.isError) {
      return <ErrorView {...this.props} retry={this._retry} />;
    }

    return this.props.children;
  }
}
