import React from 'react'

import Form from 'components/Form'

import NumberField from 'fields/Number'
import SelectField from 'fields/Select'
import TextAreaField from 'fields/TextArea'
import TextField from 'fields/Text'

const ComponentFields = {
  dropdown: SelectField,
  longtext: TextAreaField,
  number: NumberField,
  text: TextField
}

const createFieldValidate = field => value => {
  const { validation } = field

  if (validation && validation.regex) {
    const regExp = new RegExp(validation.regex)

    return value && !regExp.test(value)
      ? validation.message || 'Validation failed'
      : undefined
  }
}

function ComponentField (props) {
  const { config } = props

  const {
    type,
    placeholder,
    label,
    name,
    min_value,
    max_value,
    options,
    validation
  } = config

  const FieldComponent = ComponentFields[type]

  const validate = React.useMemo(
    () => createFieldValidate(config),
    []
  )

  return (
    <Form.Field
      component={FieldComponent}
      name={name}
      label={label}
      placeholder={placeholder}
      min={min_value}
      max={max_value}
      validate={validation ? validate : undefined}
    >
      {options?.map(({ title, value }, _index) => (
        <Form.SelectItem
          key={title + _index}
          value={value}
        >
          {title}
        </Form.SelectItem>
      ))}
    </Form.Field>
  )
}

export default ComponentField
