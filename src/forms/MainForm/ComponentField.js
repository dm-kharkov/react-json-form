import React from 'react'

import Form from 'components/Form'

import NumberField from 'fields/Number'
import SelectField from 'fields/Select'
import TextAreaField from 'fields/TextArea'
import TextField from 'fields/Text'

import { createFieldValidate } from 'lib/form'

const ComponentFields = {
  dropdown: SelectField,
  longtext: TextAreaField,
  number: NumberField,
  text: TextField
}

function ComponentField (props) {
  const { config, schema } = props

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
    () => createFieldValidate({ config, schema }),
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
