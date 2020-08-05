import * as prod from './auth';
import * as dev from './fake';

export const { auth, deAuth } = (() => {
  if (process.env.REACT_APP_DEV_MODE === 'true') {
    return dev;
  } else {
    return prod;
  }
})();
