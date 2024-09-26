import * as yup from 'yup'

const notValidRegex = 'Not valid by regex'

export function getInitialValues (fields) {
  if (!fields) return

  const initialValues = {}

  fields.forEach(field => {
    const { default_value, name } = field

    if (name && default_value !== undefined) {
      initialValues[name] = default_value
    }
  })

  return initialValues
}

export function getSchema (fields) {
  const validationShape = {}

  fields.forEach(field => {
    const { name, validation } = field

    let schemaField

    if (validation) {
      const {
        message = notValidRegex,
        regex,
        value_type,
        required
      } = validation

      if (value_type) {
        switch (value_type) {
          case 'string':
            schemaField = yup.string()
            break
          case 'number':
            schemaField = yup.number()
            break
          case 'boolean':
            schemaField = yup.boolean()
            break
          default:
            schemaField = yup.mixed()
        }
      }

      if (regex) {
        const regExp = new RegExp(regex.trim())

        schemaField = schemaField.matches(regExp, message)
      }

      validationShape[name] = required
        ? schemaField.required()
        : schemaField
    }
  })

  return yup.object().shape(validationShape)
}

export function createFieldValidate ({ config, schema }) {
  const { validation, name } = config
  const fieldSchema = yup.object({
    [name]: schema.fields[name]
  })

  return value => {
    if (!validation || !value) {
      return
    }

    try {
      fieldSchema.validateSync({ [name]: value }, { abortEarly: false })
    } catch (error) {
      return error.message
    }
  }
}
