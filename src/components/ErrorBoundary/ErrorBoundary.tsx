import { Component, ErrorInfo, ReactNode } from 'react';

import styles from './ErrorBoundary.module.css';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary:', {
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h2 className={styles.error}>
          Unexpected error, read the errors in the console and pass them to the developers, please.
        </h2>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
