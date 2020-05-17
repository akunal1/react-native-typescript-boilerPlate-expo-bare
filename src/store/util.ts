import { StandardApiState } from '.';

export function createEmptyState<T>(data: T, dateFetched?: Date): StandardApiState<T> {
  return {
    data,
    status: '',
    isLoading: false,
    errorMessage: '',
    isError: false,
    dateFetched: dateFetched ? dateFetched : new Date('2000-1-1'),
  };
}
