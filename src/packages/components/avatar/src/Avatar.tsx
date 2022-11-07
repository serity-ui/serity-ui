import React from "react"
import { AvatarImage } from "./avatar-image"
import { AvatarOptions } from "./avatar-types"
import { GenericAvatarIcon } from "./generic-avatar-icon"

export interface AvatarProps extends AvatarOptions { iconLabel: string}

function Avatar(props: AvatarProps) {
  const { src, name, icon=<GenericAvatarIcon/>, iconLabel='avatar'} = props
  return(
    <AvatarImage src={src} name={name} iconLabel={iconLabel} icon={icon} />
  )
}

export default Avatar
