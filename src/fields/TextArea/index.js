import React from 'react'
import PropTypes from 'prop-types'

import { cx } from '@emotion/css'
import { TextareaAutosize } from '@mui/base/TextareaAutosize'

import Form from 'components/Form'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function TextAreaField (props) {
  const {
    children,
    className,
    fullWidth = true,
    helperText,
    input,
    inputClassName,
    label,
    margin = 'normal',
    meta,
    placeholder = 'Enter text here...',
    readOnly,
    required,
    shrink,
    variant = 'filled',
    ...restProps
  } = props

  const classes = useClasses(styles)

  const error = !!(meta.touched && meta.error)

  console.log(placeholder)

  const InputProps = {
    ...input,
    readOnly,
    id: input.name,
    placeholder: placeholder || label,
    ...restProps
  }

  const rootClassName = cx(
    error && classes.error,
    className
  )

  const helperMessage = (meta.touched && meta.error) || helperText

  return (
    <Form.Control
      className={rootClassName}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      variant={variant}
    >
      {label && (
        <Form.Label
          htmlFor={input.name}
          required={required}
          variant={variant}
        >
          {label}
        </Form.Label>
      )}

      <TextareaAutosize {...InputProps} />

      {helperMessage && (
        <Form.HelperText>
          {helperMessage}
        </Form.HelperText>
      )}
    </Form.Control>
  )
}

TextAreaField.propTypes = {
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  variant: PropTypes.string
}

export default TextAreaField
