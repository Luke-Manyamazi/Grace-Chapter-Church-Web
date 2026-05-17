import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f4ef] px-6">
          <div className="text-center">
            <p className="text-black/30 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Something went wrong</p>
            <h1 className="font-heading text-6xl tracking-wider mb-6">OOPS</h1>
            <p className="text-black/45 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
              An unexpected error occurred. Please refresh the page or{' '}
              <a href="mailto:hello@gracechapterchurch.online" className="text-black font-semibold hover:opacity-60 transition-opacity">
                contact us
              </a>
              {' '}if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-xs font-bold tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
