import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidEmailError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid email '" + value + "'.")
  }
}
