import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidDateError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid date '" + value + "'.")
  }
}
