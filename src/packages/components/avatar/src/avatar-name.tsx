import React from "react"
import { AvatarOptions } from "./avatar-types"

export function initials(name: string) {
  const [firstName, lastName] = name.split(" ")
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

interface AvatarNameProps extends Pick<AvatarOptions, "name" | "getInitials"> {}

/**
 * The avatar name container
*/
export function AvatarName(props: AvatarNameProps) {
  const { name, ...rest } = props

  return (
    <div
      role="img"
      aria-label={name}
      {...rest}
      style={{background: '#27ADFC', borderRadius: '50%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}
    >
      {name && initials(name) }
    </div>
  )
}

AvatarName.displayName = "AvatarName"
