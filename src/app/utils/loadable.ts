export type Loadable<T> = {
  isLoading: boolean;
  value: T | undefined;
};
