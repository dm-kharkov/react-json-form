import * as React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import Dialog from 'components/Dialog'
import Typography from 'components/Typography'

function ShowMainFormDataDialog (props) {
  const { data, open, onClose, title } = props

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >
      <Dialog.Title>
        <b>{title}</b>
      </Dialog.Title>

      <Dialog.Content>
        {data
          ? Object.entries(data)
            .map(([key, value], index) => (
              <Typography key={index}>
                <Typography
                  component='span'
                  sx={{ color: 'blue' }}
                >
                  {key}
                </Typography>: <span>{value}</span>
              </Typography>
            ))
          : 'form is empty'}
      </Dialog.Content>

      <Dialog.Actions>
        <Button onClick={onClose}>
          Ok
        </Button>
      </Dialog.Actions>
    </Dialog>
  )
}

ShowMainFormDataDialog.propTypes = {
  data: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ShowMainFormDataDialog
