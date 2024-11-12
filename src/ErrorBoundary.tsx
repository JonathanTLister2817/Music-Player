// src/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  //Reload the page Function
  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
        return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                padding: 4,
              }}
            >
              <Typography variant="h4" color="primary" gutterBottom>
                Oops! Something went wrong.
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                We encountered an unexpected error. Please try refreshing the page or contact support if the issue persists.
              </Typography>
              <Button variant="contained" color="primary" onClick={this.handleReload}>
                Refresh Page
              </Button>
            </Box>
          );
        }
    return this.props.children;
  }
}

export default ErrorBoundary;
