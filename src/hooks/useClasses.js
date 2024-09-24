import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

export default function useClasses (styles, props) {
  const theme = useTheme()

  return React.useMemo(() => {
    const rawClasses = typeof styles === 'function'
      ? styles(theme, props)
      : styles
    const classes = {}

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      classes[key] = css(value, { label: key })
    })

    return classes
  }, [theme, props])
}
