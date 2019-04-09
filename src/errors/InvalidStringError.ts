import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidStringError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid string '" + value + "'.")
  }
}
