import { NativeImageOptions } from "./native-image";
import { FallbackStrategy, UseImageProps } from "./use-image";

interface ImageOptions extends NativeImageOptions {
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   */
  fallbackSrc?: string
  /**
   * Fallback element to show if image is loading or iamge fails
   * @type React.ReactElement
   */
  fallback?: React.ReactElement
  /**
   * Defines loading strategy
   */
  loading?: 'eager' | 'lazy'
  /**
   * If `true`, opt out of the `fallbackSrc` logic and use  as `img`
   */
  ignoreFallback?: boolean
  /**
   * - beforeLoadOrError(default): loads the fallbackImage while loading the src
   * - onError: loads the fallbackImage only if there is an error fetching the src
   *
   * @default "beforeLoadOrError"
   */
  fallbackStrategy?: FallbackStrategy
  /**
   * Defining which referrer is sent when fetching the resource.
   * @type React.HTMLAttributeReferrerPolicy
  */
  referrerPolicy?: React.HTMLAttributeReferrerPolicy
}

export interface ImageProps extends UseImageProps, ImageOptions{}
