import { TAsyncCallStatus } from 'types';

export const initialState = {
  data: {
    username: '',
    isAuthorized: false
  },
  status: 'idle' as TAsyncCallStatus,
  error: null as Error | null
};
