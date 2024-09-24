import { Form as ReduxForm } from 'redux-form'

import FormControl from 'components/Form/Control'
import FormControlLabel from 'components/Form/ControlLabel'
import FormField from 'components/Form/Field'
import FormHelperText from 'components/Form/HelperText'
import FormInput from 'components/Form/Input'
import FormOutlinedInput from 'components/Form/OutlinedInput'
import FormLabel from 'components/Form/Label'
import FormSection from 'components/Form/Section'
import FormSelect from 'components/Form/Select'
import FormSelectItem from 'components/Form/SelectItem'
import FormSubmitButton from 'components/Form/SubmitButton'

function Form (props) {
  const { noValidate = true, ...restProps } = props

  return <ReduxForm noValidate={noValidate} {...restProps} />
}

Form.Control = FormControl
Form.ControlLabel = FormControlLabel
Form.Field = FormField
Form.HelperText = FormHelperText
Form.Input = FormInput
Form.OutlinedInput = FormOutlinedInput
Form.Label = FormLabel
Form.Section = FormSection
Form.Select = FormSelect
Form.SelectItem = FormSelectItem
Form.SubmitButton = FormSubmitButton

export default Form
