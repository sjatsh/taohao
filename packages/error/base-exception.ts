interface CustomErrorParams {
  message?: string
  data?: Record<string, unknown>
  cause?: Error
}

export abstract class BaseException extends Error {
  static CODE = 1
  code: number
  data?: Record<string, unknown>
  cause?: Error
  constructor()
  constructor(error: Error)
  constructor(args: CustomErrorParams)
  constructor(args?: CustomErrorParams | Error) {
    if (args === undefined) {
      super()
    } else if (args instanceof Error) {
      super(args.message)
      this.cause = args
    } else {
      super(args.message)
      this.data = args.data
      this.cause = args.cause
    }
    this.name = this.constructor.name
    this.code = (this.constructor as typeof BaseException).CODE
  }
  toJSON() {
    return {
      code: this.code,
      name: this.name,
      data: this.data,
      message: this.message,
    }
  }
}
