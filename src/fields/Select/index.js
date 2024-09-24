import React from 'react'
import PropTypes from 'prop-types'

import { cx } from '@emotion/css'

import Form from 'components/Form'

import BrandArrowDownIcon from 'icons/BrandArrowDown'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function SelectField (props) {
  const {
    children,
    className,
    fullWidth = true,
    helperText,
    input,
    label,
    labelClassName,
    margin = 'normal',
    meta,
    multiple,
    onChanged,
    placeholder,
    readOnly,
    required,
    shrink,
    variant = 'outlined',
    ...restProps
  } = props

  const labelRef = React.useRef(null)

  const value = multiple
    ? input.value || []
    : input.value

  const error = !!(meta.touched && meta.error)
  const classes = useClasses(styles)

  const isDefaultOption = multiple
    ? !value.length
    : value === ''

  const handleChange = (e) => {
    input.onChange(e.target.value)
    onChanged && onChanged()
  }

  const InputProps = {
    ...input,
    value,
    multiple,
    readOnly,
    error,
    fullWidth,
    id: input.name,
    onBlur: () => null,
    onChange: handleChange,
    ...restProps
  }

  const { disabled } = InputProps

  const rootClassName = cx(
    classes.root,
    disabled && classes.disabled,
    className
  )

  const labelClasses = cx(
    classes.label,
    disabled && classes.labelDisabled,
    labelClassName
  )

  const helperMessage = (meta.touched && meta.error) || helperText

  const SelectProps = {
    MenuProps: {
      classes: {
        list: classes.dropdown,
        paper: classes.paper
      }
    },
    displayEmpty: !!placeholder
  }

  return (
    <Form.Control
      className={rootClassName}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      variant={variant}
    >
      <Form.Label
        classes={{ root: labelClasses }}
        required={required}
        variant={variant}
        ref={labelRef}
      >
        {label}
      </Form.Label>

      <Form.Select
        IconComponent={BrandArrowDownIcon}
        classes={{
          root: readOnly && classes.selectRootReadOnly,
          select: isDefaultOption && classes.defaultOption,
          icon: readOnly && classes.selectIconReadOnly
        }}
        {...InputProps}
        {...SelectProps}
      >
        {placeholder && (
          <Form.SelectItem
            classes={{ root: classes.defaultOption }}
            value=''
            disabled
            hidden
          >
            {placeholder}
          </Form.SelectItem>
        )}

        {children}
      </Form.Select>

      {helperMessage && (
        <Form.HelperText>
          {helperMessage}
        </Form.HelperText>
      )}
    </Form.Control>
  )
}

SelectField.propTypes = {
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default SelectField
