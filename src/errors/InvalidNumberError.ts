import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidNumberError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid number '" + value + "'.")
  }
}
