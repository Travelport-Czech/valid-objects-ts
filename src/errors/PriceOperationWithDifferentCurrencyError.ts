import { ValidObjectError } from '@/errors/ValidObjectError'

export class PriceOperationWithDifferentCurrencyError extends ValidObjectError {
  constructor(first: string, second: string) {
    super("Price operation with different currency '" + first + "' and '" + second + "'.")
  }
}
