import React from 'react'
import { cx } from '@emotion/css'

import Button from 'components/Button'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ButtonText (props) {
  const {
    children,
    className,
    icon,
    iconClassName,
    reverse,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const rootClassName = cx(
    classes.root,
    reverse && classes.reverse,
    className
  )

  const iconClasses = cx(
    classes.icon,
    reverse && classes.reverseIcon,
    iconClassName
  )

  return (
    <Button className={rootClassName} {...restProps}>
      {icon
        ? (
          <>
            <div className={classes.children}>
              {children}
            </div>

            <div className={iconClasses}>
              {icon}
            </div>
          </>
          )
        : children}
    </Button>
  )
}

ButtonText.defaultProps = {
  variant: 'text'
}

export default ButtonText
