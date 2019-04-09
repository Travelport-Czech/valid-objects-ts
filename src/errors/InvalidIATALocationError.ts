import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidIATALocationError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid location '" + value + "'.")
  }
}
