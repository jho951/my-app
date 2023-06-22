import { useEffect } from 'react';
import { Router } from 'next/router';

export const LoadingIndicator = (event) => {
  const loaderElement = document.querySelector('.loader');

  if (event === 'start') {
    loaderElement?.classList?.add('loader-progress');
  } else {
    loaderElement?.classList?.add('loader-progress-complete');

    setTimeout(() => {
      loaderElement?.classList.remove('loader-progress');
      loaderElement?.classList.remove('loader-progress-complete');
    }, 300);
  }
};

useEffect(() => {
  Router.events.on('routeChangeStart', () => handleRouteChange('start'));
  Router.events.on('routeChangeComplete', () => handleRouteChange('complete'));
  Router.events.on('routeChangeError', () => handleRouteChange('error'));

  return () => {
    Router.events.off('routeChangeStart', () => handleRouteChange('start'));
    Router.events.off('routeChangeComplete', () => handleRouteChange('complete'));
    Router.events.off('routeChangeError', () => handleRouteChange('error'));
  };
}, []);
