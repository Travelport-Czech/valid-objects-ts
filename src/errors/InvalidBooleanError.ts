import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidBooleanError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid boolean '" + value + "'.")
  }
}
