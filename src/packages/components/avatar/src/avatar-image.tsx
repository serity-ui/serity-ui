import React, { cloneElement } from 'react'
import { ImageProps } from '../../image/src/Image'
import { useImage } from "../../image/src/use-image"
import { AvatarName } from './avatar-name'
import { GenericAvatarIcon } from './generic-avatar-icon'


type AvatarImageProps = ImageProps & {
  getInitials?: (name:string) => string
  borderRadius?: number
  icon: React.ReactElement
  iconLabel?: string
  name?: string
}

export function AvatarImage(props: AvatarImageProps) {
  const {src, onError, onLoad, loading, ignoreFallback, getInitials, iconLabel, icon=<GenericAvatarIcon/>, name} = props

  /**
   * use the image hook to only show the image when it has loaded
   */
  const status  = useImage({ src, onError, ignoreFallback})

  const hasLoaded = status === 'loaded'

  /**
   * Fallback avatar applies under 2 conditions:
   * - If `src` was passed and the image has not loaded or failed to load
   * - If `src` wasn't passed
   *
   * In this case, we'll show either the name avatar or default avatar
  */
  const showFallback = !src || !hasLoaded

  if(showFallback) {
    return name ? (
      <AvatarName getInitials={getInitials} name={name} />
    ) : (
      cloneElement(icon, {
        role: 'img',
        'aria-label': iconLabel,
      })
    )
  }

  /**
   * If `src` was passed and the image has loaded, we'll show it
  */
  return(
    <img src={src} alt={name} onLoad={onLoad} loading={loading} style={{borderRadius: '50%'}} />
  )
}

AvatarImage.displayName = 'AvatarImage'
