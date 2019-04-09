import { ValidObjectError } from '@/errors/ValidObjectError'

export class InvalidLanguageError extends ValidObjectError {
  constructor(value: string) {
    super("Invalid language '" + value + "'.")
  }
}
