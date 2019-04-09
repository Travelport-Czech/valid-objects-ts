import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidDateTimeError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid date time '" + value + "'.")
  }
}
