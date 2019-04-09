import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidPriceError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid price '" + value + "'.")
  }
}
