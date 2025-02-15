import React, { Component } from 'react';

interface State {
  hasError: boolean;
  errorMessage: string;
}


export function withErrorBoundary<T>(WrappedComponent: React.ComponentType<T>) {
  return class ErrorBoundary extends Component<T, State> {
    constructor(props: T) {
      super(props);
      this.state = {
        hasError: false,
        errorMessage: '',
      };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error('ErrorBoundary Captured:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div style={{ color: 'red' }}>
            <h2>¡Ups! Algo salió mal.</h2>
            <p>{this.state.errorMessage}</p>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
