import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import Form from 'components/Form'

import useClasses from 'hooks/useClasses'

import styles from './styles'

function TextField (props) {
  const {
    children,
    className,
    endAdornment,
    fullWidth,
    helperText,
    input,
    inputClassName,
    label,
    margin,
    meta,
    placeholder = 'Enter text here...',
    readOnly,
    required,
    shrink,
    variant,
    ...restProps
  } = props

  const error = !!(meta.touched && meta.error)
  const classes = useClasses(styles)

  const InputProps = {
    ...input,
    endAdornment,
    readOnly,
    error,
    fullWidth,
    id: input.name,
    placeholder: placeholder || label,
    ...restProps
  }

  const { disabled } = InputProps

  const rootClassName = cx(
    classes.root,
    disabled && classes.disabled,
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

      <Form.OutlinedInput {...InputProps} />

      {helperMessage && (
        <Form.HelperText>
          {helperMessage}
        </Form.HelperText>
      )}
    </Form.Control>
  )
}

TextField.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  margin: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

TextField.defaultProps = {
  inputComponent: 'input',
  fullWidth: true,
  margin: 'normal',
  endAdornment: false,
  variant: 'outlined'
}

export default TextField
