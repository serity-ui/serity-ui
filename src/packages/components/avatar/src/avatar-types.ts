import React from "react"

export interface AvatarOptions {
  /**
   * The name of the person in the avatar.
   *
   * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
   * - If `src` is not loaded, the name will be used to create the initials
   */
  name?: string
  /**
   * If `true`, the `Avatar` will show a border around it.
   *
   * Best for a group of avatars.
   */
  showBorder?: boolean
  /**
   * The badge in the bottom right corner of the avatar.
   */
  children?: React.ReactNode
  /**
   * The image url of the `Avatar`
   */
  src?: string
  /**
   * List of sources to use for different screen resolutions
   */
  srcSet?: string
  /**
   * The default avatar used as fallback when `name`, and `src` is not specified.
   * @type React.ReactElement
  */
  icon?: React.ReactElement
  /**
   * Function to get the initials to display
   */
  getInitials?: (name: string) => string
}
