import * as prod from './user';
import * as dev from './fake';

export const getUserProfile = (() => {
  if (process.env.REACT_APP_DEV_MODE === 'true') {
    return dev.getUserProfile;
  } else {
    return prod.getUserProfile;
  }
})();
