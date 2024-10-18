import { BaseException } from './base-exception'

export { BaseException } from './base-exception'
export class UnimplementedException extends BaseException {
  static CODE = 120
}

export class InternalException extends BaseException {
  static CODE = 121
}

export class OutgoingNetworkException extends BaseException {
  static CODE = 122
}

export class DBException extends BaseException {
  static CODE = 123
}

export class WxApiException extends BaseException {
  static CODE = 124
}

export class TokenExpException extends BaseException {
  static CODE = 125
}

export class AccessDeniedException extends BaseException {
  static CODE = 126
}

export class ReviewException extends BaseException {
  static CODE = 127
}

export class FingerprintCheckException extends BaseException {
  static CODE = 128
}

export class DataIntegrityException extends BaseException {
  static CODE = 900
}

// Extend this if you want to show error message to the user
export class UserFacingException extends BaseException {
  static CODE = 10
}

export class InvalidSignature extends UserFacingException {
  static CODE = 300
}

export class IrrecoverableClaimFailure extends UserFacingException {
  static CODE = 301
}

export class InvalidParams extends UserFacingException {
  static CODE = 302
}

export class WithdrawBalanceNotEnough extends UserFacingException {
  static CODE = 303
}

export class WithdrawPending extends UserFacingException {
  static CODE = 304
}

export class NotInTheClaimArea extends UserFacingException {
  static CODE = 305
}

export class VprCheckFailed extends UserFacingException {
  static CODE = 306
}
