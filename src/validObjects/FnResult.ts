export type FnResultError = { readonly error: string; readonly success: false }

export type FnResult<T = undefined> =
  | FnResultError
  | { readonly error?: undefined; readonly success: true; readonly data: T }
