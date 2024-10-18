import { BaseException } from './base-exception'

export class InvalidSignature extends BaseException {
  static CODE = 901
}

export class InvalidParams extends BaseException {
  static CODE = 902
}

export class EthAccountNotFound extends BaseException {
  static CODE = 903
}

export class DotAccountNotFound extends BaseException {
  static CODE = 904
}

export class InvalidDotDID extends BaseException {
  static CODE = 905
}

export class DotAccountAlreadyLinked extends BaseException {
  static CODE = 906
}
