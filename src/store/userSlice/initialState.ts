import { IUserPerson, TAsyncCallStatus } from 'types';

export const initialState = {
  data: {
    id: NaN,
    username: '',
    persons: [] as IUserPerson[]
  },
  status: 'idle' as TAsyncCallStatus,
  error: null as Error | null
};
