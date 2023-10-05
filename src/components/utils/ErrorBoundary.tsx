import React, { useState, useEffect } from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleButtonClick = () => {
    setHasError(false);
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  useEffect(() => {
    const errorHandler = (error: Error) => {
      console.error(error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler as unknown as EventListener);

    return () => {
      window.removeEventListener(
        'error',
        errorHandler as unknown as EventListener
      );
    };
  }, []);

  return hasError ? (
    <div>
      <div className='center-error-div'>
        <h2>Oops, there is an error!</h2>
        <button type='button' onClick={handleButtonClick}>
          Back to homepage
        </button>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default ErrorBoundary;
