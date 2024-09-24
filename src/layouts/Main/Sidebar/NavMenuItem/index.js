import React from 'react'

import Button from 'components/Button'

import useClasses from 'hooks/useClasses'
import useRouter from 'hooks/useRouter'

import styles from './styles'

function MainLayoutNavMenuItemLabel (props) {
  const { item } = props
  const { to, label } = item
  const classes = useClasses(styles)

  return (
    <Button.Base className={classes.root} to={to}>
      <Label to={to}>
        {label}
      </Label>
    </Button.Base>
  )
}

function Label (props) {
  const { children, to } = props
  const { pathname } = useRouter().location
  const match = pathname.includes(to)

  return (
    <div style={{ fontWeight: match ? 700 : 400 }}>
      {children}{match && ' <---'}
    </div>
  )
}

export default React.memo(MainLayoutNavMenuItemLabel)
