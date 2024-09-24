import React from 'react'
import PropTypes from 'prop-types'

import { submitForm } from 'actions/form'

import Button from 'components/Button'

import { isSubmitting, isPristine } from 'selectors/form'

import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

function SubmitButton (props) {
  const {
    children,
    disabled,
    onClick,
    icon: Icon,
    formName,
    ...restProps
  } = props

  const dispatch = useDispatch()

  const pristine = useSelector(state => isPristine(formName)(state))
  const submitting = useSelector(state => isSubmitting(formName)(state))

  const handleSubmit = React.useCallback(
    () => dispatch(submitForm(formName)),
    []
  )

  const disabledState = submitting || (
    typeof disabled === 'undefined'
      ? pristine
      : disabled
  )

  const iconColor = disabledState
    ? 'secondary.pale'
    : 'background.paper'

  const ButtonComponent = Icon ? Button.Text : Button

  const ButtonProps = {
    disabled: disabledState,
    icon: Icon && <Icon color={iconColor} />,
    onClick: onClick || handleSubmit,
    ...restProps
  }

  return (
    <ButtonComponent {...ButtonProps}>
      {children}
    </ButtonComponent>
  )
}

SubmitButton.propTypes = {
  formName: PropTypes.string.isRequired
}

export default SubmitButton
