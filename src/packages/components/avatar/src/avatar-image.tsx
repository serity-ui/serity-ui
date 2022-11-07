import React from 'react'
import { UseImageProps } from "../../image/src/use-image"
import { AvatarName } from './avatar-name'

export interface ImageProps extends UseImageProps {
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   */
  fallbackSrc?: string
  /**
   * Fallback element to show if image is loading or image fails.
   */
  fallback?: React.ReactElement
}

type AvatarImageProps = ImageProps & {
  getInitials?: (name:string) => string
  borderRadius?: number
  name?: string
}

export function AvatarImage(props: AvatarImageProps) {
  const {src, getInitials, name} = props

  const showFallback = !src

  if(showFallback) {
    return name ?
    (
      <AvatarName getInitials={getInitials} name={name} />
    )
    :(null)
  }

  /**
   * If `src` was passed and the image has loaded, we'll show it
  */
  return(
    <img src={src} style={{borderRadius: '500%'}} />
  )
}

AvatarImage.displayName = 'AvatarImage'
