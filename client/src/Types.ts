export enum LoadingStatus {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failed = 'failed',
}

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ThemeProps {
  body: string;
  text: string;
  header: string;
}
