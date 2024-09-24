import React from 'react'

import Stack from 'components/Stack'
import MainFormDialog from 'dialogs/ShowMainFormData'
import MainForm from 'forms/MainForm'

import * as forms from 'constants/forms'

import useSelector from 'hooks/useSelector'

import { getInitialValues } from 'lib/form'

import { getFormValues } from 'selectors/form'

import formFieldsData from './fromFieldsData.json'

const FORM = forms.DYNAMIC_FIELDS_FORM
const selector = getFormValues(FORM)

function FormPage () {
  const initialValues = getInitialValues(formFieldsData)

  const formValues = useSelector(selector) || {}

  const [openDialog, setOpenDialog] = React.useState(false)

  const handleDialogClose = React.useCallback(
    () => setOpenDialog(false),
    []
  )

  const handleSubmitSuccess = React.useCallback(() => {
    setOpenDialog(true)
  }, [])

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      p={2}
      sx={{ minHeight: '100vh' }}
    >
      <MainForm
        fields={formFieldsData}
        initialValues={initialValues}
        onSubmitSuccess={handleSubmitSuccess}
      />

      {openDialog && (
        <MainFormDialog
          title={`${FORM} data:`}
          open={openDialog}
          onClose={handleDialogClose}
          data={formValues}
        />
      )}
    </Stack>
  )
}

export default FormPage
