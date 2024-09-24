import React from 'react'

import Paper from 'components/Paper'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function ExternalLayout (props) {
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {props.children}
      </Paper>
    </div>
  )
}

export default ExternalLayout
