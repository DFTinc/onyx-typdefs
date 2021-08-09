# @dft/onyx-typdefs
Typescript typedefs for ONYX
## Install

```bash
npm install @dft/onyx-typedefs
```

## API

<docgen-index>

* [`exec(...)`](#exec)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### exec(...)

```typescript
exec(options: IOnyxConfiguration) => any
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#ionyxconfiguration">IOnyxConfiguration</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### IOnyxConfiguration

| Prop                                 | Type                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------- |
| **`action`**                         | <code><a href="#onyxpluginaction">OnyxPluginAction</a></code>             |
| **`onyxLicense`**                    | <code>string</code>                                                       |
| **`returnRawImage`**                 | <code>boolean</code>                                                      |
| **`returnProcessedImage`**           | <code>boolean</code>                                                      |
| **`returnEnhancedImage`**            | <code>boolean</code>                                                      |
| **`returnBlackWhiteProcessedImage`** | <code>boolean</code>                                                      |
| **`returnFingerprintTemplate`**      | <code>boolean</code>                                                      |
| **`returnWSQ`**                      | <code>boolean</code>                                                      |
| **`shouldConvertToISOTemplate`**     | <code>boolean</code>                                                      |
| **`computeNfiqMetrics`**             | <code>boolean</code>                                                      |
| **`wholeFingerCrop`**                | <code>boolean</code>                                                      |
| **`useManualCapture`**               | <code>boolean</code>                                                      |
| **`useOnyxLive`**                    | <code>boolean</code>                                                      |
| **`useFlash`**                       | <code>boolean</code>                                                      |
| **`showLoadingSpinner`**             | <code>boolean</code>                                                      |
| **`reticleOrientation`**             | <code><a href="#onyxreticleorientation">OnyxReticleOrientation</a></code> |
| **`reticleAngle`**                   | <code>number</code>                                                       |
| **`reticleScale`**                   | <code>number</code>                                                       |
| **`backgroundColorHexString`**       | <code>string</code>                                                       |
| **`showBackButton`**                 | <code>boolean</code>                                                      |
| **`showManualCaptureText`**          | <code>boolean</code>                                                      |
| **`manualCaptureText`**              | <code>string</code>                                                       |
| **`backButtonText`**                 | <code>string</code>                                                       |
| **`cropFactor`**                     | <code>number</code>                                                       |
| **`cropSize`**                       | <code><a href="#ionyxcropsize">IOnyxCropSize</a></code>                   |
| **`probe`**                          | <code>string</code>                                                       |
| **`reference`**                      | <code>string</code>                                                       |
| **`pyramidScales`**                  | <code>{}</code>                                                           |


#### IOnyxCropSize

| Prop         | Type                |
| ------------ | ------------------- |
| **`width`**  | <code>number</code> |
| **`height`** | <code>number</code> |


#### IOnyxPluginResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`action`**      | <code>string</code>  |
| **`onyxResults`** | <code>{}</code>      |
| **`isVerified`**  | <code>boolean</code> |
| **`matchScore`**  | <code>number</code>  |


#### IOnyxResult

| Prop                                        | Type                                                                |
| ------------------------------------------- | ------------------------------------------------------------------- |
| **`rawFingerprintDataUri`**                 | <code>string</code>                                                 |
| **`processedFingerprintDataUri`**           | <code>string</code>                                                 |
| **`enhancedFingerprintDataUri`**            | <code>string</code>                                                 |
| **`blackWhiteProcessedFingerprintDataUri`** | <code>string</code>                                                 |
| **`base64EncodedFingerprintTemplate`**      | <code>string</code>                                                 |
| **`base64EncodedWsqBytes`**                 | <code>string</code>                                                 |
| **`base64EncodedGrayRawWsqBytes`**          | <code>string</code>                                                 |
| **`captureMetrics`**                        | <code><a href="#ionyxcapturemetrics">IOnyxCaptureMetrics</a></code> |


#### IOnyxCaptureMetrics

| Prop                     | Type                                                          |
| ------------------------ | ------------------------------------------------------------- |
| **`nfiqMetrics`**        | <code><a href="#ionyxnfiqmetrics">IOnyxNfiqMetrics</a></code> |
| **`livenessConfidence`** | <code>number</code>                                           |
| **`focusQuality`**       | <code>number</code>                                           |


#### IOnyxNfiqMetrics

| Prop            | Type                |
| --------------- | ------------------- |
| **`nfiqScore`** | <code>number</code> |
| **`mlpScore`**  | <code>number</code> |


### Enums


#### OnyxPluginAction

| Members       | Value                  |
| ------------- | ---------------------- |
| **`CAPTURE`** | <code>`capture`</code> |
| **`MATCH`**   | <code>`match`</code>   |


#### OnyxReticleOrientation

| Members              | Value                         |
| -------------------- | ----------------------------- |
| **`LEFT`**           | <code>`LEFT`</code>           |
| **`RIGHT`**          | <code>`RIGHT`</code>          |
| **`THUMB_PORTRAIT`** | <code>`THUMB_PORTRAIT`</code> |

</docgen-api>
