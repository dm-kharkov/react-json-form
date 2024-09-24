import MuiButton from '@mui/material/Button'

import ButtonText from 'components/Button/Text'
import ButtonBase from 'components/Button/Base'

import withLinkOnButton from 'hoc/withLinkOnButton'

const Button = withLinkOnButton()(MuiButton)

Button.Base = ButtonBase
Button.Text = ButtonText

export default Button
