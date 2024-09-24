import React from 'react'

import { SubmissionError } from 'redux-form'
import set from 'object-set'

import Form from 'components/Form'

import ArrowRight from 'icons/ArrowRight'

import * as forms from 'constants/forms'

import withForm from 'hoc/withForm'

import { getSchema } from 'lib/form'

import useClasses from 'hooks/useClasses'

import ComponentField from './ComponentField'
import styles from './styles'

function MainForm (props) {
  const {
    fields,
    form,
    handleSubmit,
    submitting
  } = props

  const classes = useClasses(styles)

  const schema = React.useMemo(
    () => getSchema(fields),
    []
  )
  const submit = async (values) => {
    await schema
      .validate(values, { abortEarly: false })
      .catch(errors => {
        const formErrors = {}

        errors.inner.forEach((error) => {
          set(formErrors, error.path, error.message)
        })

        throw new SubmissionError(formErrors)
      })
  }

  return (
    <Form
      className={classes.form}
      onSubmit={handleSubmit(submit)}
    >
      {fields.map((field, index) => {
        return (
          <ComponentField
            key={index}
            config={field}
            schema={schema}
          />
        )
      })}

      <Form.SubmitButton
        disabled={submitting}
        endIcon={<ArrowRight />}
        formName={form}
        fullWidth
        sx={{ mt: 2 }}
        variant='contained'
      >
        Submit
      </Form.SubmitButton>
    </Form>
  )
}

export default withForm({
  form: forms.DYNAMIC_FIELDS_FORM
})(MainForm)
