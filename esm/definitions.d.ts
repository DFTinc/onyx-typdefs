export interface OnyxPlugin {
  exec(options: IOnyxConfiguration): Promise<IOnyxPluginResult>;
}

export interface IOnyxConfiguration {
  action?: OnyxPluginAction
  onyxLicense?: string;
  returnRawImage?: boolean;
  returnProcessedImage?: boolean;
  returnEnhancedImage?: boolean;
  returnBlackWhiteProcessedImage?: boolean;
  returnFingerprintTemplate?: boolean;
  returnWSQ?: boolean;
  shouldConvertToISOTemplate?: boolean;
  computeNfiqMetrics?: boolean;
  wholeFingerCrop?: boolean;
  useManualCapture?: boolean;
  useOnyxLive?: boolean;
  useFlash?: boolean;
  showLoadingSpinner?: boolean;
  reticleOrientation?: OnyxReticleOrientation;
  reticleAngle?: number;
  reticleScale?: number;
  backgroundColorHexString?: string;
  showBackButton?: boolean;
  showManualCaptureText?: boolean;
  manualCaptureText?: string;
  backButtonText?: string;
  cropFactor?: number;
  cropSize?: IOnyxCropSize;
  probe?: string;
  reference?: string;
  pyramidScales?: string[];
}

export interface IOnyxCropSize {
  width?: number;
  height?: number;
}

export interface IOnyxPluginResult {
  action?: string;
  onyxResults?: IOnyxResult[];
  isVerified?: boolean;
  matchScore?: number;
}

export interface IOnyxResult {
  rawFingerprintDataUri?: string;
  processedFingerprintDataUri?: string;
  enhancedFingerprintDataUri?: string;
  blackWhiteProcessedFingerprintDataUri?: string;
  base64EncodedFingerprintTemplate?: string;
  base64EncodedWsqBytes?: string;
  base64EncodedGrayRawWsqBytes?: string;
  captureMetrics?: IOnyxCaptureMetrics;
}

export interface IOnyxCaptureMetrics {
  nfiqMetrics?: IOnyxNfiqMetrics;
  livenessConfidence?: number;
  focusQuality?: number;
}

export interface IOnyxNfiqMetrics {
  nfiqScore?: number;
  mlpScore?: number;
}

export enum OnyxPluginAction {
  CAPTURE = `capture`,
  MATCH = `match`
}

export enum OnyxReticleOrientation {
  LEFT = `LEFT`,
  RIGHT = `RIGHT`,
  THUMB_PORTRAIT = `THUMB_PORTRAIT`
}
