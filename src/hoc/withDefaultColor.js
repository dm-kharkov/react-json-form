import React from 'react'
import get from 'lodash/get'

import useTheme from 'hooks/useTheme'

export default function withDefaultColor (getDefaultColor, opts = { as: 'color' }) {
  return (Component) => (props) => {
    const theme = useTheme()
    const defaultColor = typeof getDefaultColor === 'function'
      ? getDefaultColor(props)
      : getDefaultColor

    let color

    color = get(theme.palette, props[opts.as] || defaultColor)

    if (!color) {
      color = props[opts.as]
    }

    const ComponentProps = {
      ...props,
      [opts.as]: color
    }

    return <Component {...ComponentProps} />
  }
}
