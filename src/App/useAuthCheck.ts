import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthorized, selectIsApiCallCompleted, resumeSession } from 'store/authSlice';
import { useEffect } from 'react';
import * as routes from '../routes';

export function useAuthCheck() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthorized = useSelector(selectIsAuthorized);
  const isLoading = !useSelector(selectIsApiCallCompleted);

  useEffect(() => {
    dispatch(resumeSession());
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthorized && process.env.REACT_APP_AUTH_ON === 'true') {
      history.push(routes.auth);
    }
  }, [history, isAuthorized, isLoading]);

  if (isLoading) {
    return 'loading';
  } else {
    return isAuthorized ? 'authorized' : 'not-authorized';
  }
}
