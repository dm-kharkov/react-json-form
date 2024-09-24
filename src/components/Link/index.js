import React from 'react'
import { cx } from '@emotion/css'
import { createPath } from 'history'
import { Link as RouterLink } from 'react-router-dom'

import { createLocation } from 'lib/router'

import useClasses from 'hooks/useClasses'
import useLocation from 'hooks/useLocation'

import styles from './styles'

function Link (props, ref) {
  const { className, to, defaultStyle, ...restProps } = props

  const classes = useClasses(styles)
  const currentLocation = useLocation()

  const rootClassName = cx(
    classes.root,
    defaultStyle && classes.defaultStyle,
    className
  )

  const toLocation = typeof to === 'string'
    ? createLocation(to, currentLocation)
    : to

  const replace = createPath(currentLocation) === createPath(toLocation)

  return (
    <RouterLink
      {...restProps}
      className={rootClassName}
      to={to}
      replace={replace}
      ref={ref}
    />
  )
}

export default React.forwardRef(Link)
