import React, { Component } from "react";
import { Button, Typography, Box } from "@mui/material";

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
        errorMessage: "",
      };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error("ErrorBoundary Captured:", error, errorInfo);
    }

    handleReset = () => {
      this.setState({ hasError: false, errorMessage: "" });
    };

    render() {
      if (this.state.hasError) {
        return (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h4" color="error">
              ¡Ups! Algo salió mal.
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
              {this.state.errorMessage}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleReset}
              sx={{ mt: 3 }}
            >
              Intentar de Nuevo
            </Button>
          </Box>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
