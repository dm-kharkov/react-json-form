import React from 'react'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function MainLayout (props) {
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

export default MainLayout
