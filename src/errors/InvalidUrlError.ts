import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidUrlError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid url '" + value + "'.")
  }
}
