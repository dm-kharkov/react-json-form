import React from 'react'
import PropTypes from 'prop-types'

import { cx } from '@emotion/css'

import Box from 'components/Box'
import Button from 'components/Button'
import Form from 'components/Form'

import MinusIcon from 'icons/Minus'
import PlusIcon from 'icons/Plus'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function NumberField (props) {
  const {
    className,
    color,
    disabled,
    endAdornment,
    fullWidth,
    helperText,
    input,
    label,
    margin,
    max = 100,
    meta,
    min = 0,
    placeholder,
    readOnly,
    required,
    startAdornment,
    variant,
    ...restProps
  } = props

  const classes = useClasses(styles)

  const handleDecrease = React.useCallback(
    () => {
      const currentValue = Number(input.value)
      const value = currentValue - 1 >= min
        ? currentValue - 1
        : min

      input.onChange(value)
    }, [input.value])

  const handleIncrease = React.useCallback(
    () => {
      const currentValue = Number(input.value)
      const value = currentValue + 1 <= max
        ? currentValue + 1
        : max

      input.onChange(value)
    }, [input.value])

  const handleChange = React.useCallback(
    (e) => {
      const currentValue = Number(e.target.value)

      const value = Math.min(
        Math.max(currentValue, min),
        max
      ).toFixed(0) // toFixed() removes extra 0 at the start

      input.onChange(value)
    }, [input.value])

  const InputProps = {
    ...input,
    color,
    disabled,
    endAdornment,
    className: classes.input,
    error: !!(meta.touched && meta.error),
    fullWidth,
    id: input.name,
    onBlur: handleChange,
    onChange: handleChange,
    placeholder,
    readOnly,
    startAdornment,
    inputProps: {
      max,
      min
    },
    ...restProps
  }

  const { error } = InputProps

  const rootClassNames = cx(
    classes.root,
    className
  )

  return (
    <Form.Control
      fullWidth={fullWidth}
      className={rootClassNames}
      variant={variant}
      margin={margin}
      error={error}
      color={color}
    >
      {label && (
        <Form.Label
          classes={{ root: classes.label }}
          htmlFor={input.name}
          required={required}
          variant={variant}
          color={color}
        >
          {label}
        </Form.Label>
      )}

      <Box
        width='100%'
        display='flex'
      >
        <Button
          className={classes.button}
          type='button'
          onClick={handleDecrease}
          disabled={disabled || input.value <= min}
        >
          <MinusIcon color='primary.contrastText' />
        </Button>

        <Form.Input {...InputProps} className={classes.input} />

        <Button
          className={classes.button}
          type='button'
          onClick={handleIncrease}
          disabled={disabled || input.value >= max}
        >
          <PlusIcon color='primary.contrastText' />
        </Button>
      </Box>
    </Form.Control>
  )
}

NumberField.propTypes = {
  fullWidth: PropTypes.bool,
  input: PropTypes.object.isRequired,
  margin: PropTypes.string,
  meta: PropTypes.object.isRequired
}

NumberField.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  type: 'number',
  variant: 'filled'
}

export default NumberField
