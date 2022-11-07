import React from "react"
import { AvatarImage } from "./avatar-image"
import { AvatarOptions } from "./avatar-types"

export interface AvatarProps extends AvatarOptions {}

function Avatar(props: AvatarProps) {
  const { src, name} = props
  return(
    <AvatarImage src={src} name={name}  />
  )
}

export default Avatar
